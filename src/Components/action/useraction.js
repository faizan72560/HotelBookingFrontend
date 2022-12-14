import axios from 'axios'

export const loginuser=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type: "LoginRequest"})
        const {data}=await axios.post('api/v1/login',{email,password})
        console.log(data)


        dispatch({
            type:"LoginSuccess",
            payload:data.user
        })

    }catch(err){
        dispatch({
            type:"LoginFailure",
            payload:err.response.data.message
        })
    }
}


export const register=(formdata,config)=>async(dispatch)=>{
    try{
        dispatch({
            type:"LoginRequest"
        })
        console.log(formdata,config)
        for (var pair of formdata.entries()) {
            console.log(pair[0]+ ' - ' + pair[1]); 
        }
        const {data}=await axios.post('/api/v1/register',formdata,config)
        console.log(data)

        dispatch({
            type:"LoginSuccess",
            payload:data.user
        })

    }catch(err){
        dispatch({
            type:"LoginFailure",
            payload:err.response.data.message
        })

    }
}

export const getuser=()=>async(dispatch)=>{
    try{
        dispatch({
            type:'LoadRequest'
        })

        const {data}= await axios.get('/api/v1/me')
        console.log(data)
        dispatch({
            type:"LoadSuccess",
            payload:data.user
        })

    }catch(err){
        dispatch({
            type:"LoadFailure",
            payload:err.response.data.message
        })
    }

}

export const getPost=(search='',page=1)=>async(dispatch)=>{
    try{
        dispatch({
            type:"GET_POST_REQUEST"
        })

        console.log(search,page)

        console.log(page)
        // search=search.parse()
        
        let price=[0,1800]


        let link = `https://hotel-booking-app-ashen.vercel.app/api/v1/getpost?keyword=${search}&page=${page}`;
        
    //   if (search) {
    //     console.log(search)
    //     let currentPage=2
    //     let price=[0,1200]
    //     link = `/api/v1/getpost?keyword=${search}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
    //   }

      console.log(link)
        
        const {data}=await axios.get(link)
        console.log(data)
        dispatch({
            type:"GET_POST_SUCCESS",
            payload:data.post
        })


    }catch(err){
        dispatch({
            type:"GET_POST_FAILURE",
            payload:err
        })

    }
}



export const logoutuser=()=>async(dispatch)=>{
    try{
        dispatch({type: "LogoutUserRequest"})
        console.log("hello")

        const {data}=await axios.get('api/v1/logout')
        console.log(data)


        dispatch({
            type:"LogoutUserSuccess",
            payload:data.user
        })

    }catch(err){
        dispatch({
            type:"LogoutUserFailure",
            payload:err.response.data.message
        })
    }
}


export const Getsinglepost=(id)=>async(dispatch)=>{

    try{
        dispatch({type: "SinglePostRequest"})
        console.log("hello")

        const {data}=await axios.post(`api/v1/singlepost${id}`)
        console.log(data)


        dispatch({
            type:"SinglePostSuccess",
            payload:data.post
        })

    }catch(err){
        dispatch({
            type:"SinglePostFailure",
            payload:err.response.data.message
        })
    }




}



export const Getuserbooking=()=>async(dispatch)=>{

    try{
        dispatch({type:"UserbookingRequest"})
        

        const {data}=await axios.get(`api/v1/getuserbooking`)
        console.log(data)


        dispatch({
            type:"UserbookingSuccess",
            payload:data.Booking
        })

    }catch(err){
        dispatch({
            type:"UserbookingFailure",
            payload:err.response.data.message
        })
    }




}

