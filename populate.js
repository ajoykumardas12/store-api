import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/productsModel.js";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

dotenv.config();

const dummyProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Product.deleteMany();
    await Product.create(dummyProducts);
    console.log("Populated data in db");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
