import React from 'react'
import { useDispatch } from 'react-redux'
import { Getsinglepost } from './action/useraction'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Booking } from './action/bookingaction'
import Alert from './Alert/Alert'

const Modal = () => {
  const [room, setroom] = useState(1)
  const [date, setdate] = useState('')

  const navigate=useNavigate()

    const dispatch=useDispatch()
    useEffect(() => {

        const id=localStorage.getItem('bookingid')

        dispatch(Getsinglepost(id))
     
    }, [dispatch])

    const {getsinglepost}=useSelector(state=>state.getsinglepost)
    console.log(getsinglepost)

    const {booking}=useSelector(state=>state.booking)
    console.log(booking)


    const [alert, setalert] = useState(false)
    
    
    
    
    const submithandler=()=>{
      
          const name=getsinglepost.name
          const city=getsinglepost.city
          const price=getsinglepost.price
          const image=getsinglepost.image.url


      console.log(name,city,price,room,date,image)
      localStorage.setItem('image',image)
      dispatch(Booking(name,city,price,date,room,image))

      if(booking=== undefined)
      {
        setalert(true)
        console.log(alert)
        setTimeout(()=>{
          navigate('/',{replace:true})

        },1000)

      }
      else{
        setalert(true)
        console.log(alert)
        setTimeout(()=>{
          navigate('/',{replace:true})

        },1000)
      }

      setTimeout(()=>{
        setalert(false)
      },2000)





    }


    




  return (
    <div>
        
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75  transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

     
      <div class="justify-center m-auto relative transform overflow-hidden rounded-lg bg-white text-left  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
      <button className='md:text-xl bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-full cursor-pointer' onClick={()=>{navigate('/',{replace:true})}}>X</button>
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 md:h-96 md:w-full w-80 ">
          <div class="">
          
      {alert&&<Alert message='Booked Successfully'/>}

            

          <img src={getsinglepost&& getsinglepost.image.url} alt='not found' className='w-full h-24 md:h-52 md:w-full' />

          <div className='card-body'>

            <h1 className='text-2xl'>{getsinglepost&& getsinglepost.name}</h1>
            <h2 className='md:text-xl'>{getsinglepost&& getsinglepost.city}</h2>
            <h2 className='md:text-xl float-left'>Rs {getsinglepost&& getsinglepost.price}</h2><br/>
            <span className='w-20 md:w-40'>
          <input type='Date' placeholder='Search By City' className='h-10  text-blue-700  border-solid border-2 border-yellow-500 w-full ' onChange={(e)=>{setdate(e.target.value)}} />
           {/* <h1>Date</h1> */}
            </span>
            <h2 className='text-xl md:mx-16'>No of Room</h2>
            



             <div className=''>


                
            <div class="custom-number-input h-10 w-32 float-left">
  {/* <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold mx-7">Room */}
  {/* </label> */}
  <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 md:mx-16">
    <button data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"  onClick={()=>{setroom(room-1)}}>
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={room} placeholder='Room'></input>
  <button data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={()=>{setroom(room+1)}}>
    <span class="m-auto text-2xl font-thin">+</span>
  </button>

</div>
 
</div>
            <button className='bg-zinc-200 shadow-lg  hover:bg-blue-500  font-semibold py-2 px-4 border border-gray-400 rounded  float-right  text-blue-800 text-sm sm:h-5 sm:text-start md:h-10  md:w-20' onClick={submithandler}>Confirm</button>
             </div>
            <div >






            </div>


          </div>

        
            
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Modal