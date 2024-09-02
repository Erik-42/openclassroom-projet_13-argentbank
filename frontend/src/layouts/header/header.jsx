import { Link, useNavigate } from "react-router-dom";
import styled from "./Header.module.scss";
import logo from "../../assets/img/logo/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "../../slice/tokenSlice";

export default function Header() {
	const token = useSelector((state) => state.token.token);
	const firstname = useSelector((state) => state.user.firstname);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSignOut = () => {
		dispatch(removeToken());
		navigate("/"); // Redirige vers la page d'accueil après la déconnexion
	};

	return (
		<header>
			<nav className={styled.nav}>
				<Link className={styled.nav__logo} to="/">
					<img
						className={styled.nav__logo__image}
						src={logo}
						alt="Argent Bank Logo"
					/>
				</Link>
				{token ? (
					<div className={styled.nav__container}>
						<Link className={styled.nav__container__item} to="/dashboard">
							<i className="fa fa-user-circle firstname"></i>
							{firstname}
						</Link>
						<button
							onClick={handleSignOut}
							className={styled.nav__container__item}
						>
							<i className="fa fa-sign-out"></i> Sign Out
						</button>
					</div>
				) : (
					<Link className={styled.nav__container__item} to="/login">
						<i className="fa fa-user-circle"></i> Sign In
					</Link>
				)}
			</nav>
		</header>
	);
}
