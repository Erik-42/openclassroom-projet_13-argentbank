import styled from './login.module.scss';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { setToken } from '../../slice/tokenSlice';
import {useNavigate} from 'react-router-dom'

export default function Login() {

  const [login, setLogin]=useState("")
  const [password, setPassword]=useState("")
const dispatch = useDispatch()
const navigate =useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login)
    console.log(password)
    fetch ('http://localhost:3001/api/v1/user/login',{
      headers:{'content-type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({
        email:login,
        password:password
      })
    })
    .then((response)=> response.json())
    .then((data)=>{
     dispatch(setToken(data.body.token))
     console.log(data)
     navigate('/dashboard')
    })
  };

  return (
    <main className={styled.mainSignin}>
    <section className={styled.signIn}>
      <i className={`fa fa-user-circle ${styled.signIn__icon}`}></i>
      <h1>Sign In</h1>

      <div className={styled.signIn__errorMessage}>errorMessage</div>

      <form className={styled.signIn__form} onSubmit={handleSubmit}>
        <div className={styled.signIn__form__wrapper}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required value={login} onChange={(e)=> setLogin(e.target.value)}/>
        </div>
        <div className={styled.signIn__form__wrapper}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div className={styled.signIn__form__remember}>
          <input id="rememberMe" type="checkbox" name="persistent" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <button type="submit" className={styled.signIn__button}>Sign In</button>
      </form>
    </section>
    </main>
  );
}
