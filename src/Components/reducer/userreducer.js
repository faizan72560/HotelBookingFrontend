import { createReducer } from "@reduxjs/toolkit";
const intialState={
  isAuthenticated:false
}

export const userReducer = createReducer(intialState,{
    LoginRequest:(state)=>{
        state.isLoading=true
    },
    LoginSuccess:(state,action)=>{
        state.isLoading=false
        state.user=action.payload
        state.isAuthenticated=true
    },
    LoginFailure:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        state.isAuthenticated=false
    },
    LoadRequest:(state)=>{
        state.isLoading=true
    },
    LoadSuccess:(state,action)=>{
        state.isLoading=false
        state.user=action.payload
        state.isAuthenticated=true
    },
    LoadFailure:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        state.isAuthenticated=false
    },
    LogoutUserRequest: (state) => {
        state.loading = true;
        
      },
      LogoutUserSuccess: (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      },
      LogoutUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
      },
      
      cleanError:(state)=>{
        state.error=null
      },

      clearMessage:(state)=>{
        state.message=null
      }


})



// export const RegisterReducer = createReducer(intialState,{
 
//   RegisterUserRequest: (state) => {
//       state.loading = true;
//     },
//     RegisterUserSuccess: (state) => {
//       state.loading = false;
//       state.user = action.payload
//       state.isAuthenticated = true;
//     },
//     RegisterUserFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//       state.isAuthenticated = false;
//     },
    
//     cleanError:(state)=>{
//       state.error=null
//     },

//     clearMessage:(state)=>{
//       state.message=null
//     }


// })



// export const registerUser = createReducer(intialState,{
//   LoginRequestt:(state)=>{
//       state.isLoading=true
//   },
//   LoginSuccesss:(state,action)=>{
//       state.isLoading=false
//       state.user=action.payload
//       state.isAuthenticated=true
//   },
//   LoginFailure:(state,action)=>{
//       state.isLoading=false
//       state.error=action.payload
//       state.isAuthenticated=false
//   },
//   LoadRequest:(state)=>{
//       state.isLoading=true
//   },
//   LoadSuccess:(state,action)=>{
//       state.isLoading=false
//       state.user=action.payload
//       state.isAuthenticated=true
//   },
//   LoadFailure:(state,action)=>{
//       state.isLoading=false
//       state.error=action.payload
//       state.isAuthenticated=false
//   },
//   LogoutUserRequest: (state) => {
//       state.loading = true;
//     },
//     LogoutUserSuccess: (state) => {
//       state.loading = false;
//       state.user = null;
//       state.isAuthenticated = false;
//     },
//     LogoutUserFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//       state.isAuthenticated = true;
//     },
    
//     cleanError:(state)=>{
//       state.error=null
//     },

//     clearMessage:(state)=>{
//       state.message=null
//     }


// })