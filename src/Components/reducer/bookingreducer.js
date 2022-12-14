import { createReducer } from "@reduxjs/toolkit";
const intialState={
  
}


export const BookingpostReducer = createReducer(intialState,{
    BookingPostRequest:(state)=>{
        state.isLoading=true
    },
    BookingPostSuccess:(state,action)=>{
        state.isLoading=false
        state.booking=action.payload
        
    },
    BookingPostFailure:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        
    },
    
})


export const userBookingReducer = createReducer(intialState,{
    UserbookingRequest:(state)=>{
        state.isLoading=true
    },
    UserbookingSuccess:(state,action)=>{
        state.isLoading=false
        state.userbooking=action.payload
        
    },
    UserbookingFailure:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        
    },
    
})



export const deleteBookingReducer = createReducer(intialState,{
    DeletePostRequest:(state)=>{
        state.isLoading=true
    },
    DeletePostSuccess:(state,action)=>{
        state.isLoading=false
        state.deletebooking=action.payload
        
    },
    DeletePostFailure:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        
    },
    
})