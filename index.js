const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const { rootRouter } = require("./routers");

dotenv.config();
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

connect();
app.use(express.json());
app.use("/api/v1",rootRouter)
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
const port = 8069|| process.env.PORT;
app.listen(port, () => {
  console.log(`App run on http://localhost:${port}/api/v1`);
});
