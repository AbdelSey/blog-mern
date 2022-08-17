import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import dotenv from "dotenv";
import router from "./routes/userRoutes";
const PORT = process.env.PORT || 8000;
dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());
app.use("/api/user", router);
connectDB();


app.listen(5000, () => {
  console.log(`server running on port ${PORT}`);
});
