import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from './action/useraction'
import Alert from './Alert'

const Register = () => {
  const[name,setname]=useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState()
  const [image,setimage]=useState()
  const [alert, setalert] = useState(false)


  
  const { error, isLoading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  console.log(isAuthenticated,error,isLoading)

  const navigate=useNavigate()
  
  
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
  
  const dispatch=useDispatch()
  
  const registerhandler=(e)=>{
    e.preventDefault()
    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('email',email)
    formdata.append('password',password)
    formdata.append('image',image)
    for (var pair of formdata.entries()) {
      console.log(pair[0]+ ' - ' + pair[1]); 
    }
    const config={
      headers:{
        'Content-Type': 'multipart/form-data',
      }
    }
    
    console.log(name,email,password)
    
    dispatch(register(formdata,config))
    
    
    
    
  }
  
    useEffect(() => {

      console.log(alert)
      if(error){
        setalert(true)
        setTimeout(()=>{
          setalert(false)

        },2000)
      }
      console.log(alert)

      
      if(isAuthenticated){
        navigate('/',{replace:true})
  
      }
      
      
    }, [dispatch,isAuthenticated,error])
    




  return (
    <div>

      {alert ?  (<Alert error={error}/>):(
        <></>
      )}
        <nav className='bg-blue-800 h-14'>
            <ul className='flex'>
              <Link to ='/'>
                <h1 className='text-2xl text-white my-2 mx-8 cursor-pointer'>Booking.com</h1>
              </Link>
                

            </ul>
        </nav>

        <div className='conatainer3 flex flex-col justify-center items-center m-auto my-3 shadow-lg rounded-xl w-1/2 p-4 ' >
          <div className='w-full '>

            <h1 className='text-3xl text-center'>Register</h1><br/>
            <form encType='multipart/form-data' method='POST'>

            <label className='text-left' for="fname">userName</label><br/>
            <input type='text'  className='h-11 w-full border solid' value={name} onChange={(e)=>{setname(e.target.value)}} /><br/>
            <label for="pic">select a pic</label><br/>
            <input type='File'  className='text-center m-auto  h-11 w-full ' id="form3Example4cd"  accept='image/*' name='image' onChange={pickedhandler}/><br/>

            

            <label for="fname">Email</label><br/>
            <input type='text'  className=' m-auto  h-11 w-full border solid ' value={email} onChange={(e)=>{setemail(e.target.value)}}/><br/>
            <label for="fname">Password</label><br/>
            <input type='password'  className=' h-11 w-full border solid ' value={password}  onChange={(e)=>{setpassword(e.target.value)}}/><br/><br/>
            <button className='bg-blue-700  hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full' onClick={registerhandler}>Register </button>
            </form>
          </div>

        </div>

    </div>
  )
}

export default Register