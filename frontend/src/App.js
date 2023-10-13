import Header2 from "./component/layout/Header/Header2";
import Footer from "./component/layout/Footer/Footer";
import webFont from "webfontloader";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import "./App.css";
import Profile from "./component/User/Profile.jsx";
import ProductDetails from "./component/Product/ProductDetail.jsx";
import Products from "./component/Product/Products.jsx";
import Search from "./component/Product/Search.jsx";
import LoginSingUp from "./component/User/LoginSingUp";
import UpdateProfile from "./component/User/UpdateProfile.jsx";
import store from "./store/store";
import { loadUser } from "./store/actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import { useSelector } from "react-redux";
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import ForgotPassword from "./component/User/ForgotPassword.jsx";
import ResetPassword from "./component/User/ResetPassword.jsx";
import Cart from "./component/Cart/Carts.jsx";
import Shipping from "./component/Cart/Shipping.jsx";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment.jsx";
import OrderSuccess from "./component/Cart/OrderSuccess.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyOrders from "./component/Order/MyOrders.jsx";
import OrderDetails from "./component/Order/OrderDetails.jsx";
import Dashboard from "./component/Admin/Dashboard.jsx";
import ProductList from "./component/Admin/ProductList.jsx";
import NewProduct from "./component/Admin/NewProduct.jsx";
import UpdateProduct from "./component/Admin/UpdateProduct.jsx";
import OrderList from "./component/Admin/OrderList.jsx";
import ProcessOrder from "./component/Admin/ProcessOrder.jsx";
import UsersList from "./component/Admin/UsersList.jsx";
import UpdateUser from "./component/Admin/UpdateUser.jsx";
import ProductReviews from "./component/Admin/ProductReviews.jsx";
import About from "./component/layout/About/About";
import Contact from "./component/layout/Contact/Contact";
import NotFound from "./component/layout/Not Found/Not Found";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header2 />
      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route exact path="/process/payment" element={<Payment />} />
            </Route>
          </Routes>
        </Elements>
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/*" element={<NotFound />} />
        <Route exact path="/login" element={<LoginSingUp />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route exact path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/login/shipping" element={<Shipping />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
          <Route exact path="/success" element={<OrderSuccess />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/order/:id" element={<OrderDetails />} />
          <Route
            isAdmin={true}
            exact
            path="/admin/dashboard"
            element={<Dashboard />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/products"
            element={<ProductList />}
          />
          <Route
            exact
            path="/admin/product"
            isAdmin={true}
            element={<NewProduct />}
          />
          <Route
            exact
            path="/admin/product/:id"
            isAdmin={true}
            element={<UpdateProduct />}
          />
          <Route
            exact
            path="/admin/orders"
            isAdmin={true}
            element={<OrderList />}
          />
          <Route
            exact
            path="/admin/order/:id"
            isAdmin={true}
            element={<ProcessOrder />}
          />
          <Route
            exact
            path="/admin/users"
            isAdmin={true}
            element={<UsersList />}
          />
          <Route
            exact
            path="/admin/user/:id"
            isAdmin={true}
            element={<UpdateUser />}
          />
          <Route
            exact
            path="/admin/reviews"
            isAdmin={true}
            element={<ProductReviews />}
          />
        </Route>
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
