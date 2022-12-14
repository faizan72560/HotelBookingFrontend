import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import  {getPost, logoutuser}  from './action/useraction'
import Loader from './Loader'
import { useState } from 'react'
import axios from 'axios'
import Footer from './Footer'
import Alert from './Alert/Alert'




const Navbar = () => {
  const navigate=useNavigate()
  
  
  const [city, setcity] = useState()
  const [search, setsearch] = useState()
  var [page, setpage] = useState(1)
  const [alert, setalert] = useState(false)

  const dispatch=useDispatch()
  
    useEffect(() => {
      console.log(search)
  
      dispatch(getPost(search,page))
      
      
    }, [dispatch,page,search])


  const {getpost,isLoading}=useSelector(state=>state.getpost)
  
  const { error,isAuthenticated } = useSelector(
    (state) => state.user
  );
  console.log(getpost,isLoading,isAuthenticated)


  

  const incpagination=()=>{
    // if(page<=)
    setpage((page) => page + 1);
    console.log(page)
    // dispatch(getPost(page))
    



  }
  
  const decpagination=()=>{
    setpage((page) => page - 1);
    console.log(page)
    // dispatch(getPost(page))



  }

  const logouthandler=async()=>{

    await dispatch(logoutuser())
    setalert(true)

    setTimeout(()=>{
      setalert(false)
    },2000)
    
    
  }

  const bookinghandler=(id)=>{
    console.log('hello')

    localStorage.setItem('bookingid',id)
    

    if(!isAuthenticated)
    {
      navigate('/signin',{replace:true})
    }

    else{
      navigate('/book',{replace:true})
    }


  }
  

  return (
    <div>
      {alert && <Alert message="Logeed Out Successfully"/>}
      <nav className=' bg-blue-900 text-white max-h-60 w-43'>
        <div >
          <h1 className='text-3xl font-serif mx-4'>Booking.com</h1>
          
          
          
          {/* <div className='float-left'> */}
          {isAuthenticated ? <Link to = '/'>
          <button className='rounded-sm float-right  hover:bg-blue-500 bg-white text-blue-900 mx-3 md:w-20' onClick={logouthandler}>Log Out</button>
          </Link>:(<div>
          <Link to = '/register'>
          <button className='rounded-sm float-right  hover:bg-blue-500 bg-white text-blue-900 mx-3 md:w-20'>Register </button>
          </Link>
          <Link to = '/signin'>
          <button className='rounded-sm float-right  hover:bg-blue-500 bg-white text-blue-900 mx-3 md:w-20' >Sign in</button>
          </Link>
          </div>)
          }

          {/* </div> */}
        </div>
        <ul className='flex px-4'>
          <Link to='/'>
          <li className='mx-2 my-8 md:text-2xl  cursor-pointer'>Home</li>
          </Link>
          {isAuthenticated && <Link to = '/booking'>
          <li className='mx-2 my-8 md:text-2xl cursor-pointer'>My Booking </li>
          </Link>}


        </ul>
        <h1 className='md:text-4xl mx-4'>Find your next stay</h1>
        <h1 className='md:text-2xl mx-4'>Search deals on hotels, homes, and much more...</h1>
        <div className='flex '>
          <div className=' flex m-auto max-w-xs md:my-4 '>
            <span className='w-20 md:w-40'>
          <input type='Date' placeholder='Search By City' className='h-10  text-blue-700  border-solid border-2 border-yellow-500 w-full ' />
           {/* <h1>Date</h1> */}
            </span>

            < input type='search ' placeholder='Search By City' className='w-16  md:w-28  h-10 text-blue-700  border-solid border-2 border-yellow-500  ' onChange={(e)=>{setsearch(e.target.value)}}/>
            <select className="form-select border-solid border-2 border-yellow-500  text-blue-700 w-20" aria-label="Default select example" onChange={(e)=>{setsearch(e.target.value)}}>
              <option value="">All</option>
              <option value="mumbai">mumbai</option>
              <option value="delhi">delhi</option>
              <option value="patna">patna</option>
              <option value="hyderabad">hyderabad</option>
              <option value="gaya">gaya</option>
              <option value="kolkata">kolkata</option>
              <option value="goa">goa</option>



            </select>

            <button className='rounded-sm float-right  hover:bg-blue-500 bg-blue-800 text-white-1200 w-24  border-solid border-2 border-yellow-500'>Search</button>
          </div>

        </div>

      </nav>
      <div className='conatiner   flex flex-wrap my-7  justify-center '>

          {isLoading?<Loader/>:(
          
          getpost && getpost.map((elem)=>{
            return(

              <div key={elem._id} className="">
              <div className='card h-52 md:h-52 w-54 md:w-80 my-1 md:my-7 border-solid border-2 border-black-500 ' >
          <img src={getpost && elem.image.url} alt='not found' className='w-44 h-24 md:h-full md:w-full' />


          <div className='card-body'>

            <h1 className='text-2xl'>{getpost && elem.name}</h1>
            <h2 className='md:text-xl'>{getpost && elem.city}</h2>

            <button className='bg-zinc-200 shadow-lg  hover:bg-blue-500  font-semibold py-2 px-4 border border-gray-400 rounded  float-right  text-blue-800 text-sm sm:h-5 sm:text-start md:h-10  md:w-16'onClick={()=>{bookinghandler(elem._id)}}>Book</button>
            <h2 className='md:text-xl float-left'>Rs {getpost && elem.price}</h2><br/>
            <div >




            </div>


          </div>

        </div>

              </div>
              )
          })
        )

        }  

        {/* <div className='card h-full w-60 my-20  border-solid border-2 border-black-500' >
          <img src='' alt='not found'/>


          <div className='card-body'>

            <h1 className='text-2xl'>azadshatru</h1>
            <h2 className='text-xl'>Rs 1200</h2>


          </div>

        </div> */}


{/* 
{getpost && getpost.map((elem)=>{
            return(
              <div>


              <div key={elem._id}>
              <div className='card h-full w-40 my-20  border-solid border-2 border-black-500' >
          <img src={getpost && elem.image.url} alt='not found' className='w-full'/>


          <div className='card-body'>

            <h1 className='text-2xl'>{getpost && elem.name}</h1>
            <h2 className='text-xl'>{getpost && elem.price}</h2>


          </div>

        </div>

              </div>
          </div>
              )
          })} */}

      </div>

      <div className='flex justify-center my-24'>

        <button className='bg-blue-700  hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow w-24' onClick={decpagination}>Previous</button>
        <button className='bg-blue-700  hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow w-24' onClick={incpagination}>Next</button>


       
      </div>

      <Footer/>

</div>
)
}

export default Navbar