import  express  from "express";
const app= express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import tourGuidesRoute from "./routes/tourGuide.js";
//import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("erro is ", error)
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

//middleware functions
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/tourGuides", tourGuidesRoute);
//app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!");
});