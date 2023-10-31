import React, { useState } from "react";
import "./Header2.css";

import SearchIcon from "@material-ui/icons/Search";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

function Header3() {
  const navigate = useNavigate();
  const location = useLocation();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <HorizontalSplitIcon />
            </label>

            <div className="logo">
              <Link to="/">
                <h2>ShopNew</h2>
              </Link>
            </div>
            <ul className="navUnorderLinks">
              <div className="inputBox">
                <form className="nav-search" onSubmit={searchSubmitHandler}>
                  <input
                    className="search-input"
                    type="text"
                    placeholder="   Search a product..."
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </form>
                <button>
                  <SearchIcon fontSize="large" />
                </button>
              </div>
              <div className="navLinks">
                <li>
                  <Link
                    to="/products"
                    className={
                      location.pathname === "/products" ? "active" : ""
                    }
                  >
                    Products
                  </Link>
                </li>
                <li>
                  {isAuthenticated ? (
                    <Link
                      to="/account"
                      className={
                        location.pathname === "/account" ? "active" : ""
                      }
                    >
                      {user.name}
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className={location.pathname === "/login" ? "active" : ""}
                    >
                      Sign in
                    </Link>
                  )}
                </li>
                {isAuthenticated && user.role === "admin" ? (
                  <>
                    <li>
                      <Link
                        to="/admin/dashboard"
                        className={
                          location.pathname === "/admin/dashboard"
                            ? "active"
                            : ""
                        }
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/orders"
                        className={
                          location.pathname === "/orders" ? "active" : ""
                        }
                      >
                        Orders
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      to="/orders"
                      className={
                        location.pathname === "/orders" ? "active" : ""
                      }
                    >
                      Orders
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    to="/cart"
                    className={location.pathname === "/cart" ? "active" : ""}
                  >
                    Cart
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Header3;
