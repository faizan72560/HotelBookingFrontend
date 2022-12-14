import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addpost, deletepost, Getallpost, updatepost } from './action/adminaction'
import { useSelector } from 'react-redux'
// import { getPost } from './action/useraction'
import { useEffect } from 'react'
import Loader from './Loader'
import  Update  from './Update'

const Admin = () => {
  const {getallpost,isLoading,isAuthenticated}=useSelector(state=>state.getallpost)
  console.log(getallpost,isLoading)

  const dispatch=useDispatch()
  
  
  
  const [name, setname] = useState('')
  const [city, setcity] = useState('')
  const [room, setroom] = useState()
  const [image, setimage] = useState(0)
  const [price, setprice] = useState(0)
  const [update, setupdate] = useState(false)
  const [del, setdel] = useState(false)
  const [added, setadded] = useState(false)
  
    useEffect(() => {
      dispatch(Getallpost())
      
    
    }, [dispatch,update,del,added])


  const pickedhandler=(e)=>{
    console.log(e.target.name)

    if(e.target.name==='image'){
      const reader = new FileReader();

      reader.onload = () => {
          if (reader.readyState === 2) {
              setimage(reader.result)
              console.log(image)
            
          }
      }

      reader.readAsDataURL(e.target.files[0])
    }

      
  }

  

  const submithandler=async(e)=>{
    e.preventDefault()
    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('city',city)
    formdata.append('room',room)
    formdata.append('image',image)
    formdata.append('price',price)

    for (var pair of formdata.entries()) {
      console.log(pair[0]+ ' - ' + pair[1]); 
  }
    const config={
      headers:{
        'Content-Type': 'multipart/form-data',
      }
    }
    
    console.log(name,city,room)

    await dispatch(addpost(formdata,config))
    setadded(true)



    setTimeout(()=>{
      setadded(false)
    },200)


  }

  const updatehandler=(id)=>{
    console.log(id)
    localStorage.setItem('updateid',id)
    setupdate(true)

    // const id=localStorage.getItem('updateid')



    // dispatch(updatepost(name,city,price,room,id))
    
    
    
    // window.scrollTo(0, 0)
    // dispatch(updatepost(name,city,room,price,id))
    


  }

  const Updatehandler=async()=>{
    const id=localStorage.getItem('updateid')
    console.log(name,city,room,price,id)
    await dispatch(updatepost(name,city,price,room,id))
    setupdate(false)

    
  }

  
  const deletehandler=(id)=>{
    console.log(id)

    dispatch(deletepost(id))
    setdel(true)

    setTimeout(()=>{
      setdel(false)
    },200)

  }


  return (
    

    <div>
      {update&&

      
<div className='conatainer3 flex flex-col justify-center items-center m-auto my-3 shadow-lg rounded-xl w-1/2 p-4 ' >
          <div className='w-full '>

            <h1 className='text-3xl text-center'>Update</h1><br/>
            {/* <form > */}

            <label className='text-left' for="fname">Name</label><br/>
            <input type='text'  className='h-11 w-full border solid' value={name} onChange={(e)=>{setname(e.target.value)}} /><br/>
            <label className='text-left' for="fname">City</label><br/>
            <input type='text'  className='h-11 w-full border solid' value={city} onChange={(e)=>{setcity(e.target.value)}} /><br/>
            <label className='text-left' for="fname">Room</label><br/>
            <input type='text'  className='h-11 w-full border solid' value={room} onChange={(e)=>{setroom(e.target.value)}} /><br/>
            <label className='text-left' for="fname">Price</label><br/>
            <input type='text'  className='h-11 w-full border solid' value={price} onChange={(e)=>{setprice(e.target.value)}} /><br/>
           
    
            <button className='bg-blue-700  hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full' onClick={Updatehandler}>Update</button>
            
           
            {/* </form> */}
          </div>

        </div>



}




{/* table  */}

<table class="border-separate border border-slate-400 ... w-screen">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">Name</th>
      <th class="border border-slate-300 ...">City</th>
      <th class="border border-slate-300 ...">Room</th>
      <th class="border border-slate-300 ...">Price</th>
      <th class="border border-slate-300 ...">Update</th>
      <th class="border border-slate-300 ...">Delete</th>


    </tr>
  </thead>
  <tbody>
    
    {isLoading?<Loader/>:(
      getallpost && getallpost.map((elem)=>{
        return(
          <>
             <tr>
      <td class="border border-slate-300 ... text-center">{elem.name}</td>
      <td class="border border-slate-300 ... text-center">{elem.city}</td>
      <td class="border border-slate-300 ... text-center">{elem.room}</td>
      <td class="border border-slate-300 ... text-center">{elem.price}</td>
      <td class="border border-slate-300 ... text-center"  onClick={()=>{updatehandler(elem._id)}}><button className='bg-blue-700  hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full'>Update</button></td>
      <td class="border border-slate-300 ... text-center" onClick={()=>{deletehandler(elem._id)}}><button className='bg-red-700  hover:bg-red-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full'>Delete</button></td>

    </tr>

          </>
        )
      })
    )}
     
   
  </tbody>
</table>

{/* <Update/> */}


        {/* <br/> */}
        <form encType='multipart/form-data' method='POST'>
      <div className='container flex flex-col shadow-lg w-1/2 h my-12 mx-auto justify-center p-4'>
        <h1 className='text-center md:text-3xl'> Add Hotel </h1>
        <label htmlFor='text' className=' md:text-2xl'>Hotel Name</label>
        <input type='text' placeholder='hotel name' className='h-9 border' value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <label htmlFor='text' className=' md:text-2xl'>Add Pic</label>
        <input type='file' placeholder='hotel name' className='h-9 border' accept='image/*' name='image' onChange={pickedhandler}/>
        <label htmlFor='text' className='md:text-2xl'>Room</label>
        <input type='Number' placeholder='room'  className='h-9 border' value={room} onChange={(e)=>{setroom(e.target.value)}}/>
        <label htmlFor='text' className='md:text-2xl'>City</label>
        <input type='text' placeholder='city' className='h-9 border' value={city} onChange={(e)=>{setcity(e.target.value)}}/>
        <label htmlFor='text' className='md:text-2xl'>Price</label>
        <input type='text' placeholder='price' className='h-9 border' value={price} onChange={(e)=>{setprice(e.target.value)}}/><br/>
        <button className='rounded-r-sm bg-blue-700 h-7 hover:bg-blue-500' onClick={submithandler}>Submit</button>
          
    </div>
        </form>

      </div>
  )
}

export default Admin