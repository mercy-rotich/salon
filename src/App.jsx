import React from 'react' 
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Login from './Components/LoginSignup/Login'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Hero/>
      <Routes>
        <Route path ='login' element ={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
