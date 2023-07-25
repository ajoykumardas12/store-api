import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("got");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, console.log(`Listening to port 3000`));
