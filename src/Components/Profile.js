import React from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader'


const Profile = () => {

const {user,isLoading,isAuthenticated}=useSelector(state=>state.user)
console.log(user)



  return (
    <div >
      {
        isLoading?<Loader/>:(
          
            <div>
               <div className='container my-10 h-5/6  mx-auto shadow-lg md:w-1/2 '>
        <img src={user && user.avatar.url} alt='not found' className='items-center md:my-4 mx-auto rounded-full' />
        <div className='flex my-10 flex-col md:flex-row justify-center '>
          <div>
            <h1 className='md:text-3xl text-center md:mx-5'>Name</h1><br />
            <h1 className='md:text-xl  text-center md:mx-3'>{user && user.name}</h1><br />
            
          </div>
          <div>

            <h1 className='md:text-3xl text-center md:mx-8'>Email</h1><br />
            <h1 className='md:text-xl text-center md:mx-3'>{user && user.email}</h1><br />

          </div>
          <div>

            <h1 className='md:text-3xl text-center md:mx-3'>id</h1><br />
            <h1 className='md:text-xl  text-center md:mx-3'>{user && user._id}</h1><br />

          </div>


        </div>




      </div>
            </div>
          )

        
      }

      
    </div>
  )
}

export default Profile