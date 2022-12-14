import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { updatepost } from './action/adminaction'
import { useSelector } from 'react-redux'

const Update = (props) => {

    const {getpost}=useSelector(state=>state.getpost)
    console.log(getpost)

    const dispatch=useDispatch()

    const [name, setname] = useState('')
    const [city, setcity] = useState('')
    const [room, setroom] = useState()
    const [price, setprice] = useState()

    const updatehandler=(e)=>{
        e.preventDefault()
        const id=props.id
        dispatch(updatepost(name,city,room,price,id))
        

    }

  return (
    <div>

<div className='conatainer3 flex flex-col justify-center items-center m-auto my-3 shadow-lg rounded-xl w-1/2 p-4 ' >
          <div className='w-full '>

            <h1 className='text-3xl text-center'>Update</h1><br/>
            <form >

            <label className='text-left' for="fname">Name</label><br/>
            <input type='text'  className='h-11 w-full border solid' value={name} onChange={(e)=>{setname(e.target.value)}} /><br/>
            <label className='text-left' for="fname">City</label><br/>
            <input type='text'  className='h-11 w-full border solid' value={city} onChange={(e)=>{setcity(e.target.value)}} /><br/>
            <label className='text-left' for="fname">Room</label><br/>
            <input type='text'  className='h-11 w-full border solid' value={room} onChange={(e)=>{setroom(e.target.value)}} /><br/>
            <label className='text-left' for="fname">Price</label><br/>
            <input type='text'  className='h-11 w-full border solid' value={price} onChange={(e)=>{setprice(e.target.value)}} /><br/>
           
    
            <button className='bg-blue-700  hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full' onClick={updatehandler}>Register </button>
            
           
            </form>
          </div>

        </div>

    </div>
  )
}

export default Update