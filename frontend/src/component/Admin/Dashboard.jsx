import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../store/actions/productAction";
import { getAllOrders } from "../../store/actions/orderAction";
import { getAllUsers } from "../../store/actions/userAction";
import MetaData from "../layout/MetaData";

function Dashboard() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  return (
    <>
      <div className="dashboard">
        <MetaData title="Dashboard - Admin Panel" />

        <Sidebar />
        <div className="dashboardContainer">
          <Typography component="h1">Dashboard</Typography>

          <div className="dashboardSummary">
            <div>
              <p>
                Total Amount <br />
                {totalAmount}
              </p>
            </div>

            <div className="dashboardSummaryBox2">
              <Link to="/admin/products">
                <p>Products</p>
                <p>{products && products.length}</p>
              </Link>
              <Link to="/admin/orders">
                <p>Orders</p>
                <p>{orders && orders.length}</p>
              </Link>
              <Link to="/admin/users">
                <p>Users</p>
                <p>{users && users.length}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
