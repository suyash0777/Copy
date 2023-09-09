const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//handling uncaugth exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to uncaugth exception`);
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to unhandle promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
