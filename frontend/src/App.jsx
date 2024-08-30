import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import './App.module.scss'
import '../src/style/root.module.scss'
import { Home } from './pages/home/home'
import { Signin } from './pages/signin/signin'
import { Dashboard } from './pages/dashboard/dashboard'
import Header from './layouts/header/header'
import Footer from './layouts/footer/footer'
import Error404 from './pages/error404/error404'

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/login' element={<Signin></Signin>}/>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
      <Route path='*' element={<Error404></Error404>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
   
  )
}


export default App
