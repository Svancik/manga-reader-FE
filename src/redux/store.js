 //store.js
 import { configureStore } from '@reduxjs/toolkit'
 import cartReducer from './cartReducer'
 //díky kódu níže bude pod objektem cart uložen cartReducer.js který jsme nastavili
 export const store = configureStore({
   reducer: {cart: cartReducer}, 
 })