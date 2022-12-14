import axios from "axios"

export const Booking=(name,city,price,date,room,image)=>async(dispatch)=>{
    try{
        dispatch({type: "BookingPostRequest"})
        console.log(name,city,price,room,image)
        
        const config={
            
            ContentType:'application/json'
            
        }
        

        const {data}=await axios.post('api/v1/booking',{name,room,price,date,city,image},config)
        console.log(data)


        dispatch({
            type:"BookingPostSuccess",
            payload:data.booked
        })

    }catch(err){
        dispatch({
            type:"BookingPostFailure",
            payload:err._message
        })
    }



}


export const Deletebooking=(id)=>async(dispatch)=>{
    try{
        dispatch({type: "DeletePostRequest"})
       
        

        const {data}=await axios.post(`api/v1/deletebooking${id}`)
        console.log(data)


        dispatch({
            type:"DeletePostSuccess",
            payload:data.booked
        })

    }catch(err){
        dispatch({
            type:"DeletePostFailure",
            payload:err._message
        })
    }



}