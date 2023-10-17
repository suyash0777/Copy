const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // Options for the cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    // httpOnly: true,
    secure: true,
    sameSite: "None",
    domain: ".newshop-b4ff.onrender.com",
    path: "/api/v1",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;

// const sendToken = (user, statusCode, res) => {
//   const token = user.getJWToken();
//   console.log(`Token: ${token}`);

//   // Options for the cookie
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     // httpOnly: true,
//     secure: true,
//     sameSite: "None",
//     domain: ".newshop-b4ff.onrender.com",
//     path: "/api/v1",
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     token,
//   });
// };

// module.exports = sendToken;
