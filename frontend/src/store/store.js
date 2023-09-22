import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productReducer,
  productDetailsReducer,
} from "./reducer/productReducer";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
} from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
});

export default store;
