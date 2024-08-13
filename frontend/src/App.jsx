import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Signin } from './pages/signin'
import { Dashboard } from './pages/dashboard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/login' element={<Signin></Signin>}/>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App
