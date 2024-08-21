import { Link } from 'react-router-dom';
import styled from './Header.module.scss';
import logo from '../../assets/img/logo/argentBankLogo.png';
import { Signin } from'../../pages/signin/signin'
import { Home } from '../../pages/home/home';
import { Dashboard } from '../../pages/dashboard/dashboard';

export default function Header() {

  return (
 <header>
<nav className="nav">
      <Link className={styled.nav__logo} to={Home}>
        <img
          className={styled.nav__logo__image}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className={styled.nav__title}>Argent Bank</h1>
      </Link>
      <>
        <Link className={styled.nav__item} to={Signin}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        <Link className={styled.nav__item} to={Dashboard}>
             <i className="fa fa-user-circle"></i>
        </Link>

        <Link className={styled.nav__item}>
              <i className="fa fa-sign-out"></i> Sign Out
        </Link>
     </>
</nav>
    </header>  )
}
