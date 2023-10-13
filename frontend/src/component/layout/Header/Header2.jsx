import React, { useState } from "react";
import "./Header2.css"; // Make sure to import your CSS file
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  const { user, isAuthenticated } = useSelector((state) => state.user);

  // Function to handle logo click
  const handleLogoClick = () => {
    // Define the action you want to perform here
    // For example, you can navigate to the home page
    navigate("/");
  };

  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        {/* Attach onClick to the Link wrapping the logo */}
        <label className="logo" onClick={handleLogoClick}></label>
        <ul>
          <li>
            {isAuthenticated ? (
              <Link to="/account">{user.name}</Link>
            ) : (
              <Link to="/login">Hello, sign in</Link>
            )}
          </li>
          <li>
            <Link className="" to="/products">
              products
            </Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <form
              className="search-box input-box"
              onSubmit={searchSubmitHandler}
            >
              <input
                type="text"
                placeholder="Search a Product..."
                onChange={(e) => setKeyword(e.target.value)}
              />
            </form>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
