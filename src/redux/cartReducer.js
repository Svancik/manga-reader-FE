   
    
    import { createSlice } from '@reduxjs/toolkit';
// e1) nastavíme INITIAL STATE
    const initialState = {
      //e2) toto pole products bude globálně přístupné a budem do něj přidávat položky do košíku
      products:[]
    }
      //e3) níže nastavíme název, initialState a reducery které obsahují akce s daty
    export const cartSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
        //e4) přidání položek do košíku
        addToCart: (state, action) => {
            //e4_a) ověříme zda máme zboží již v košíku
            const item = state.products.find(item=>item.id === action.payload.id)
            //e4_b) pokud je v košíku tak zvolené množství zboží přičteme k množstí zboží v košíku
            if (item){
                item.quantity+= action.payload.quantity;
              //e4_c) pokud zboží není v košíku tak ho ve vybraném množství nově přidáme
            } else{
                state.products.push(action.payload);
            }
        },
        //e5) odstranění položek z košíku
        removeItem: (state, action) => {
          state.products = state.products.filter(item=> item.id !== action.payload);
        },
        //e6) vyčištění košíku
        resetCart: (state) => {
          state.products = [];
        },
        increaseQuantity: (state, action) =>{
          const item = state.products.find(item=>item.id === action.payload.id);
          if(item){
            item.quantity+=action.payload.quantity;
          }
        },
        decreaseQuantity: (state, action) =>{
          const item = state.products.find(item=>item.id === action.payload.id);
          if(item){            
            item.quantity === 1 ? console.log("Delete item.") : item.quantity-=action.payload.quantity;
                    
          }
        },


      },
    })
    export const { addToCart, removeItem, resetCart, increaseQuantity,decreaseQuantity } = cartSlice.actions
    export default cartSlice.reducer