import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = [...action.payload];
    },
    pushCart: (state, action) => {
      let ind = -1;
      if(state.cart.some((item, index) => {
        if(item.id === action.payload.product.id) {
          ind = index; return true;
        }
        return false;
      })) {
        state.cart[ind] = {
          ...state.cart[ind],
          quantity: state.cart[ind].quantity + action.payload.quantity,
        }
      }
      
      else {
        state.cart.push({...action.payload.product, quantity: action.payload.quantity});
      }
      // console.log(state.cart);
    },
    removeFromCart: (state, action) => {
      let ind = -1;
      if(state.cart.some((item, index) => {
        if(item.id === action.payload.product.id) {
          ind = index; return true;
        }
        return false;
      })) {
        state.cart[ind] = {
          ...state.cart[ind],
          quantity: state.cart[ind].quantity - action.payload.quantity,
        }
        state.cart = state.cart.filter((item) => item.quantity > 0);
      }
    },
    changeQuantity: (state, action) => {
      let ind = -1;
      if(state.cart.some((item, index) => {
        if(item.id === action.payload.product.id) {
          ind = index; return true;
        }
        return false;
      })) {
        state.cart[ind] = {
          ...state.cart[ind],
          quantity: action.payload.quantity,
        }
        state.cart = state.cart.filter((item) => item.quantity > 0);
      }
    }
  }
});

export const { setCart, pushCart, removeFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;