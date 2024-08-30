import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { userReducer } from "./userSlice";
import { searchReducer } from "./searchProductSlice";
import { courseReducer } from "./courseSlice";
import { orderReducer } from "./orderSlice";



export const store = configureStore({
   reducer:{
    cartState:cartReducer,
    userState:userReducer,
    searchState: searchReducer,
    courseState: courseReducer,
    orderState : orderReducer,
   },
});
