import styled from './login.module.scss';

export default function Login() {
  // Fonction de soumission (à compléter plus tard)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion à venir
  };

  return (
    <section className={styled.signIn}>
      <i className={`fa fa-user-circle ${styled.signIn__icon}`}></i>
      <h1>Sign In</h1>

      <div className={styled.signIn__errorMessage}>errorMessage</div>

      <form className={styled.signIn__form} onSubmit={handleSubmit}>
        <div className={styled.signIn__form__wrapper}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div className={styled.signIn__form__wrapper}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </div>
        <div className={styled.signIn__form__remember}>
          <input id="rememberMe" type="checkbox" name="persistent" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <button type="submit" className={styled.signIn__button}>Sign In</button>
      </form>
    </section>
  );
}
