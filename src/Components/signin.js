import React from 'react'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { loginuser } from './action/useraction'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Alert from './Alert'


const Signin = () => {
  
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [alert, setalert] = useState(false)
  
  const { error,isAuthenticated,isLoading } = useSelector(
    (state) => state.user
  );

  console.log(error,isAuthenticated)

  const navigate=useNavigate()



  const dispatch=useDispatch()

  useEffect(() => {

    
    if(isAuthenticated){
      navigate('/',{replace:true})

    }
    else{

      
      if(error){
      
      setalert(true)
      console.log(alert)
      
      
      // dispatch({type:"cleanError"})
      setTimeout(()=>{
         setalert(false)
        },2000)
        
        
        
      }
      
    }


      // setTimeout(()=>{
      //   setalert(false)
      // },2000)


    console.log(alert)

    console.log(isAuthenticated)

    
    // if(isAuthenticated){
    //   navigate('/',{replace:true})

    // }
    
    
  }, [dispatch,isAuthenticated,error])
  

  const submithandler=()=>{
    dispatch(loginuser(email,password))
  }
  return (
    <div>
      
      {alert ?  (<Alert error={error}/>):(
        <></>
      )}
        <nav className='bg-blue-800 h-14'>
            <ul className='flex'>
              <Link to='/'>
                <h1 className='text-2xl m-auto text-white my-2 mx-8 cursor-pointer'>Booking.com</h1>
              </Link>
                

            </ul>
        </nav>

        <div className=' item-center flex flex-col justify-center my-5 w-1/2 m-auto shadow-lg p-3'>
            <h1 className='text-3xl text-center'>Sign in</h1>
            <label for="fname">Email</label><br/>
            <input type='text'  className='items-center h-11  border solid w-full' value={email}  onChange={(e)=>{setemail(e.target.value)}}/><br/>
            <label for="fname">Password</label><br/>
            <input type='password'  className=' h-11 w-full border solid ' value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br/><br/>
            <button className='bg-blue-700 hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full' onClick={submithandler}>Sign in </button>

        </div>

    </div>
  )
}

export default Signin