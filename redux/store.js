import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
export const store = () => {
  return configureStore({
    reducer: {
        cart: cartSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
  });
} 