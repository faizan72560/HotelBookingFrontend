import { createReducer } from "@reduxjs/toolkit";
const intialState={
  
}

export const addpostReducer = createReducer(intialState,{
    ADD_POST_REQUEST:(state)=>{
        state.isLoading=true
    },
    ADD_POST_SUCCESS:(state,action)=>{
        state.isLoading=false
        state.post=action.payload
        
    },
    ADD_POST_FAILURE:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        
    },
    
})


export const getpostReducer = createReducer(intialState,{
    GET_POST_REQUEST:(state)=>{
        state.isLoading=true
    },
    GET_POST_SUCCESS:(state,action)=>{
        state.isLoading=false
        state.getpost=action.payload
        
    },
    GET_POST_FAILURE:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        
    },
    
})



export const updatepostReducer = createReducer(intialState,{
    UPDATE_POST_REQUEST:(state)=>{
        state.isLoading=true
    },
    UPDATE_POST_SUCCESS:(state,action)=>{
        state.isLoading=false
        state.post=action.payload
        
    },
    UPDATE_POST_FAILURE:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        
    },
    
})


export const deletepostReducer = createReducer(intialState,{
    DELETE_POST_REQUEST:(state)=>{
        state.isLoading=true
    },
    DELETE_POST_SUCCESS:(state,action)=>{
        state.isLoading=false
        state.post=action.payload
        
    },
    DELETE_POST_FAILURE:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        
    },
    
})


export const getallpostReducer = createReducer(intialState,{
    GETALL_POST_REQUEST:(state)=>{
        state.isLoading=true
    },
    GETALL_POST_SUCCESS:(state,action)=>{
        state.isLoading=false
        state.getallpost=action.payload
        
    },
    GETALL_POST_FAILURE:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        
    },
    
})



export const SinglepostReducer = createReducer(intialState,{
    SinglePostRequest:(state)=>{
        state.isLoading=true
    },
    SinglePostSuccess:(state,action)=>{
        state.isLoading=false
        state.getsinglepost=action.payload
        
    },
    SinglePostFailure:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        
    },
    
})