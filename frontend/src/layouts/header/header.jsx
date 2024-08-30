import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { removeToken } from '../../slice/tokenSlice';

export default function Header() {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeToken());
    navigate('/'); // Redirige vers la page d'accueil après la déconnexion
  };

  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.nav__logo} to="/">
          <img
            className={styles.nav__logo__image}
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.nav__title}>Argent Bank</h1>
        </Link>

        {token ? (
          <>
            <Link className={styles.nav__item} to="/dashboard">
              <i className="fa fa-user-circle"></i> Dashboard
            </Link>
            <button onClick={handleSignOut} className={styles.nav__item}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button>
          </>
        ) : (
          <Link className={styles.nav__item} to="/login">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </nav>
    </header>
  );
}
