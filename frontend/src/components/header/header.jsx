
import { Link } from 'react-router-dom';
import styled from './Header.module.scss';
import logo from '../../assets/img/logo/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../slice/signSlice';

export default function Header() {
  const token = useSelector((state) => state.sign.token); //Selectionne le token
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <header>
      <nav className="nav">
        <Link className={styled.nav__logo} to="/">
          <img
            className={styled.nav__logo__image}
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styled.nav__title}>Argent Bank</h1>
        </Link>

        {token ? ( // Affiche le dashboard si connecté, sinon "Sign In"
          <>
            <Link className={styled.nav__item} to="/dashboard">
              <i className="fa fa-user-circle"></i> Dashboard
            </Link>
            <button onClick={handleSignOut} className={styled.nav__item}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button>
          </>
        ) : (
          <Link className={styled.nav__item} to="/signin">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </nav>
    </header>
  );
}
