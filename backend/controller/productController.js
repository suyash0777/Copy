const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeature = require("../utils/apifeature");

//Create prodcut
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

//Get all product
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();

  const ApiFeatures = new ApiFeature(Product.find(), req.query)
    .Search()
    .filter()
    .pagination(resultPerPage);
  const products = await ApiFeatures.query;

  res.status(200).json({
    success: true,
    productCount,
    products,
  });
});

//Get Product Details or single product
exports.productDetails = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//Update Product
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});
