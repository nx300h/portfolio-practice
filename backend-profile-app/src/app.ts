import express from "express";
import dotenv from "dotenv";
import profileRoutes from "./api/profile.routes";
import sequelize from "./config/database";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", profileRoutes);

sequelize
  .sync()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection failed:", err));

export default app;
