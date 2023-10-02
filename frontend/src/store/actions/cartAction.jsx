import {
  ADD_TO_CART,
  LOAD_CART_FROM_STORAGE,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "axios";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity,
    },
  });

  // Save the updated cartItems to sessionStorage
  sessionStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

// Load cart data from sessionStorage when the application starts
export const loadCartFromStorage = () => (dispatch) => {
  const savedCartItems = sessionStorage.getItem("cartItems");
  if (savedCartItems) {
    const parsedCartItems = JSON.parse(savedCartItems);
    dispatch({
      type: LOAD_CART_FROM_STORAGE,
      payload: parsedCartItems,
    });
  }
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  sessionStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  sessionStorage.setItem("shippingInfo", JSON.stringify(data));
};
