import styles from "./signinForm.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../slice/tokenSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Charge le token depuis le localStorage
	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			dispatch(setToken(storedToken));
			navigate("/dashboard");
		}
	}, [dispatch, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:3001/api/v1/user/login", {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify({
				email: login,
				password: password,
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Identifiants incorrect");
				}
				return response.json();
			})
			.then((data) => {
				if (data.body && data.body.token) {
					dispatch(setToken(data.body.token));
					if (rememberMe) {
						localStorage.setItem("token", data.body.token);
					}
					navigate("/dashboard");
				} else {
					throw new Error(data.message || "Login failed");
				}
			})
			.catch((error) => {
				setErrorMessage(error.message);
			});
	};

	return (
		<section className={styles.login}>
			<i className={`fa fa-user-circle ${styles.login__icon}`}></i>
			<h1>Sign In</h1>

			{errorMessage && (
				<div className={styles.login__errorMessage}>{errorMessage}</div>
			)}

			<form className={styles.login__form} onSubmit={handleSubmit}>
				<div className={styles.login__form__wrapper}>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						required
						value={login}
						onChange={(e) => setLogin(e.target.value)}
					/>
				</div>
				<div className={styles.login__form__wrapper}>
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className={styles.login__form__remember}>
					<input
						id="rememberMe"
						type="checkbox"
						name="persistent"
						checked={rememberMe}
						onChange={(e) => setRememberMe(e.target.checked)}
					/>
					<label htmlFor="rememberMe">Remember me</label>
				</div>

				<button type="submit" className={styles.login__button}>
					Sign In
				</button>
			</form>
		</section>
	);
}
