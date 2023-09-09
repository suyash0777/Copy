const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB Connected with Server: ${data.connection.host}`);
    });
};

///mongodb+srv://suyashpatil972:suyashpatil972@cluster0.kqdvmhx.mongodb.net/Ecommerce?retryWrites=true&w=majority

module.exports = connectDatabase;
