import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.module.scss'
import '../src/style/root.module.scss'
import { Home } from './pages/home/home'
import { Signin } from './pages/signin/signin'
import { Dashboard } from './pages/dashboard/dashboard'


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
