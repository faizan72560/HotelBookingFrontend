import axios from "axios"


export const addpost=(formdata,config)=>async(dispatch)=>{
    try{

        
        dispatch({
            type:"ADD_POST_REQUEST"
        })
        
        const {data}=await axios.post('api/v1/addpost',formdata,config)
        console.log(data)
        dispatch({
            type:"ADD_POST_SUCCESS",
            payload:data.post
        })
    }catch(err){
        dispatch({
            type:"ADD_POST_FAILURE",
            payload:err
        })
      
    }

}


export const updatepost=(name,city,price,room,id)=>async(dispatch)=>{
    try{

        
        dispatch({
            type:"UPDATE_POST_REQUEST"
        })
        
        const {data}=await axios.post(`api/v1/updatepost${id}`,{name,city,room,price})
        console.log(data)
        dispatch({
            type:"UPDATE_POST_SUCCESS",
            payload:data.post
        })
    }catch(err){
        dispatch({
            type:"UPDATE_POST_FAILURE",
            payload:err
        })
      
    }

}


export const deletepost=(id)=>async(dispatch)=>{
    try{

        
        dispatch({
            type:"UPDATE_POST_REQUEST"
        })
        
        const {data}=await axios.delete(`api/v1/deletepost${id}`,)
        console.log(data)
        dispatch({
            type:"UPDATE_POST_SUCCESS",
            payload:data.post
        })
    }catch(err){
        dispatch({
            type:"UPDATE_POST_FAILURE",
            payload:err
        })
      
    }

}



export const Getallpost=(id)=>async(dispatch)=>{
    try{

        
        dispatch({
            type:"GETALL_POST_REQUEST"
        })
        
        const {data}=await axios.get(`api/v1/allpost`,)
        console.log(data)
        dispatch({
            type:"GETALL_POST_SUCCESS",
            payload:data.post
        })
    }catch(err){
        dispatch({
            type:"GETALL_POST_FAILURE",
            payload:err
        })
      
    }

}