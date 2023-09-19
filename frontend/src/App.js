import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import webFont from "webfontloader";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import "./App.css";
import ProductDetails from "./component/Product/ProductDetail.jsx";
import Products from "./component/Product/Products.jsx";
import Search from "./component/Product/Search.jsx";
import LoginSingUp from "./component/User/LoginSingUp";
import store from "./store/store";
import { loadUser } from "./store/actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
// import axios from "axios";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSingUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
