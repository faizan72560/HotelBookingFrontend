import React from 'react'
import Profile from './Profile'
import { useDispatch, useSelector } from 'react-redux'
import { Getuserbooking } from './action/useraction'
import { useEffect } from 'react'
import Loader from './Loader'
import { Deletebooking } from './action/bookingaction'
import { useState } from 'react'


const Booking = () => {

  const dispatch=useDispatch()


  const {userbooking,isLoading}=useSelector(state=>state.userbooking)
  console.log(userbooking,isLoading)

  const [dlete, setdlete] = useState(false)

  

  useEffect(() => {

    // const id=user._id

    dispatch(Getuserbooking())
   
  }, [dispatch,dlete])

  const deletehandler=(id)=>{
    dispatch(Deletebooking(id))
    setdlete(true)
    setTimeout(()=>{
      setdlete(false)

    },200)

  }

  
  


  return (
    <div>

    <Profile/>
{/* 
         <div className='card h-44 w-52 flex my-10  shadow-2xl '>
         <div className='card-body'>
         
         </div>
         
         
         </div> 
        */}
        
            <div className='container h-80  min-w-full '>
                <h1 className='text-3xl text-center '>My Bookings</h1>
                <div className='flex justify-center  flex-wrap '>

        
                {isLoading?<Loader/>:(
                  userbooking && userbooking.map((elem)=>{
                    return(
                      
                      <div>
                      <div className='card md:h-56 md:w-52  my-10 mx-3  '>
                      <img src={elem.image} className='h-44 w-56'/>
                    <div className='card-body flex flex-col '>
                      {elem.name}<br/>
                      {elem.city}<br/>
                      {elem.price}<br/>

                      <button className='rounded-sm float-right  hover:bg-blue-500 bg-red-500 text-blue-900  md:w-20' onClick={()=>{deletehandler(elem._id)}}>Delete</button>
        
        
                    </div>
        
        
                </div>
                      
        
                    </div>
                      )
                    })
                    )}
                    </div>
                    </div>
    </div>
  )
}

export default Booking