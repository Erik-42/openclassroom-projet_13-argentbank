import SigninForm from "../../components/signinForm/signinForm";
import styled from "./login.module.scss";

export function Login() {
	return (
		<main className={styled.bg__login}>
			<SigninForm />
		</main>
	);
}
