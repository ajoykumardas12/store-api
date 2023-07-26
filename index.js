import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import { productsRouter } from "./routes/productsRoute.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// connect to db
connectDB();

// middlewares
app.use(express.json());

// home route
app.get("/", (req, res) => {
  res.send("got");
});

// products routes
app.use("/api/v1/products", productsRouter);

// error handler middlewares
app.use(notFound);
app.use(errorHandler);

// listen to PORT
app.listen(port, console.log(`Listening to port 3000`));
