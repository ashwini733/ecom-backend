const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");

const ProductRoutes = express.Router();

ProductRoutes.get("/", getAllProducts);
ProductRoutes.get("/:productId", getProductById);
ProductRoutes.post("/", createProduct);
ProductRoutes.put("/:productId", updateProduct);
ProductRoutes.delete("/", deleteProduct);

module.exports = ProductRoutes;
