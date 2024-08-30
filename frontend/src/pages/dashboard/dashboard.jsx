import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../slice/userSlice";
import styled from './Dashboard.module.scss';

export function Dashboard() {
  const token = useSelector((state) => state.token.token); // Sélectionne le token
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/user/profile", {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      method: 'POST',
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.body);
        dispatch(setUser({ firstname: data.body.firstName, lastname: data.body.lastName }));
      });
  }, [dispatch, token]);

  return (
    <div className={styled.dashboard}>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./user.html">
            <i className="fa fa-user-circle"></i> {firstname}
          </a>
          <a className="main-nav-item" href="./index.html">
            <i className="fa fa-sign-out"></i> Sign Out
          </a>
        </div>
      </nav>
      <main className={styled.main}>
        <div className={styled.header}>
          <h1>Welcome back<br />{firstname} {lastname}!</h1>
          <button className={styled.editButton}>Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className={styled.account}>
          <div className={styled.accountContentWrapper}>
            <h3 className={styled.accountTitle}>Argent Bank Checking (x8349)</h3>
            <p className={styled.accountAmount}>$2,082.79</p>
            <p className={styled.accountAmountDescription}>Available Balance</p>
          </div>
          <div className={`${styled.accountContentWrapper} ${styled.cta}`}>
            <button className={styled.transactionButton}>View transactions</button>
          </div>
        </section>
        <section className={styled.account}>
          <div className={styled.accountContentWrapper}>
            <h3 className={styled.accountTitle}>Argent Bank Savings (x6712)</h3>
            <p className={styled.accountAmount}>$10,928.42</p>
            <p className={styled.accountAmountDescription}>Available Balance</p>
          </div>
          <div className={`${styled.accountContentWrapper} ${styled.cta}`}>
            <button className={styled.transactionButton}>View transactions</button>
          </div>
        </section>
        <section className={styled.account}>
          <div className={styled.accountContentWrapper}>
            <h3 className={styled.accountTitle}>Argent Bank Credit Card (x8349)</h3>
            <p className={styled.accountAmount}>$184.30</p>
            <p className={styled.accountAmountDescription}>Current Balance</p>
          </div>
          <div className={`${styled.accountContentWrapper} ${styled.cta}`}>
            <button className={styled.transactionButton}>View transactions</button>
          </div>
        </section>
      </main>
      <footer className={styled.footer}>
        <p className={styled.footerText}>Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}
