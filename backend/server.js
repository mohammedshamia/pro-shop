import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./route/productRouter.js";
import { notFound, errorHandler } from "./middleware/errorMiddelware.js";

const app = express();
dotenv.config({ path: "backend/.env" });
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(
  port,
  console.log(`server running on port ${port}`.yellow.underline)
);
