import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../slice/userSlice";

export  function Dashboard() {
    const token = useSelector((state) => state.token.token); //Selectionne le token
    const dispatch = useDispatch()
    const firstname =useSelector((state) => state.user.firstname)
    const lastname =useSelector((state) => state.user.lastname)

  useEffect(()=>{
fetch ("http://localhost:3001/api/v1/user/profile",{
  headers: {
    'content-type': 'application/json',
    Authorization: 'Bearer '+ token
  },
  method:'POST',
  body: JSON.stringify({})
}
)
.then (response => response.json())
.then (data => {
  console.log(data.body)
  dispatch(setUser({firstname: data.body.firstName, lastname: data.body.lastName}))
})
  },[])

  return (
    <div>
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
          <i className="fa fa-user-circle"></i>
          Tony
        </a>
        <a className="main-nav-item" href="./index.html">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstname} {lastname}!</h1>
        <button className="editButton">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
    </div>
  )
}
