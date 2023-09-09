const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a product name"],
  },
  description: {
    type: String,
    required: [true, "please enter a product description"],
  },
  price: {
    type: Number,
    required: [true, "please enter a product price"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, " please required the product category"],
  },
  stock: {
    type: Number,
    required: [true, " please required the product stock"],
    maxlength: [4, "stock cannot xceed 4 character"],
    default: 1,
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAT: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
