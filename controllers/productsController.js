import asyncHandler from "express-async-handler";
import Product from "../models/productsModel.js";

const getAllProducts = asyncHandler(async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObj = {};

  if (featured) {
    queryObj.featured = featured;
  }
  if (company) {
    queryObj.company = company;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }
  console.log(queryObj);
  const products = await Product.find(queryObj);
  res.status(200).json({ products, nbHits: products.length });
});

export { getAllProducts };
