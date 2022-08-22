import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
	loginStart,
	loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  registerFail,
  registerStart,
  registerSuccess,
} from "../pages/client/auth/authSlice";
import { getProductFail, getProductsFail, getProductsStart, getProductsSuccess, getProductStart, getProductSuccess } from "../pages/client/product/productSlice";

// export const getProducts = async (dispatch) => {
//   try {
//     const {data} = await axios.get('http://localhost:4000/products')
//     console.log(data);
//     dispatch(getProductsSuccess(data))
//   } catch (error) {
//     // dispatch(getProductsFail())
//   }
// };
export const getProduct = async (id,dispatch) =>{
  dispatch(getProductStart())
  try {
    const {data} = await axios.get('http://localhost:4000/products/' +id)
    dispatch(getProductSuccess(data))
  } catch (error) {
    dispatch(getProductFail())
  }
};
export const registerUser = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const {data} = await axios.post("http://localhost:4000/register", user);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFail());
  }
};

export const loginUser = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const {data} = await axios.post("http://localhost:4000/login", user);
    localStorage.setItem('user', JSON.stringify(data))
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(registerFail());
  }
};

