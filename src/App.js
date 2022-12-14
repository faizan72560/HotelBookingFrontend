import React from 'react'
import Booking from './Components/Booking'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Register from './Components/Register'
import Signin from './Components/signin'
import Modal from './Components/Modal'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from './Components/admin'
import { useDispatch, useSelector } from 'react-redux'
import { getuser } from './Components/action/useraction'
import { useEffect } from 'react'
import Loader from './Components/Loader'


const App = () => {
  const {user}=useSelector(state=>state.user)
  console.log(user)
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getuser())
   
  }, [dispatch])
  
  return (
    <div>

      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Navbar />} />
      <Route  path="/register" element={<Register />} />
      <Route  path="/signin" element={<Signin />} />
      <Route  path="/booking" element={<Booking />} />  
      <Route  path="/admin" element={<Admin />} />  
      <Route  path="/book" element={<Modal />} />  


      </Routes>
      {/* <Loader/> */}
      {/* <Footer/> */}
      {/* <Modal/> */}
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App