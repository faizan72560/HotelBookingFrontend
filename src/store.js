import { RegisterReducer, userReducer } from "./Components/reducer/userreducer"
import { configureStore } from "@reduxjs/toolkit"
import { addpostReducer, deletepostReducer, getallpostReducer, getpostReducer, SinglepostReducer, updatepostReducer } from "./Components/reducer/addpostreducer"
import { BookingpostReducer, deleteBookingReducer, userBookingReducer } from "./Components/reducer/bookingreducer"
// import { Getsinglepost } from "./Components/action/useraction"

const store=configureStore({
    reducer:{
        user:userReducer,
        addpost:addpostReducer,
        updatepost:updatepostReducer,
        deletepost:deletepostReducer,
        getpost:getpostReducer,
        getallpost:getallpostReducer,
        getsinglepost:SinglepostReducer,
        booking:BookingpostReducer,
        userbooking:userBookingReducer,
        deletebooking:deleteBookingReducer
        
      
    
    }
    , middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),   

    })

export default store