const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Config
dotenv.config({ path: "config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);

app.use("/api/v1", user);

app.use("/api/v1", order);

app.use("/api/v1", payment);

//Error Middleware
app.use(errorMiddleware);

module.exports = app;
