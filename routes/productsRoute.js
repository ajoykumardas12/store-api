import express from "express";
import { getAllProducts } from "../controllers/productsController.js";

const router = express.Router();

router.route("/").get(getAllProducts);

export { router as productsRouter };
