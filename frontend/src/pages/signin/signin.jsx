import LoginForm from "../../components/loginForm/loginForm";
import styled from './signin.module.scss'

export  function Signin() {
  return (
      <main className={styled.bg__signin}>
        <LoginForm />
      </main>
  );
}
