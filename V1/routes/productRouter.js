import express from "express";
import { getAllProducts } from "../controllers/getAllProducts.js";
import { getAllProductsByTitle } from "../controllers/getAllProductsByTitle.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/title/:title?", getAllProductsByTitle);

export default productRouter;
