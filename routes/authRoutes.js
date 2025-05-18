const express = require("express");
const { registerUser } = require("../controllers/authController");
const { login } = require("../controllers/authController");
const { Logout } = require("../controllers/authController");
const ProductRoutes = require("./ProductRoutes");
const { getAllProducts } = require("../controllers/ProductController");
const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", login);
authRoutes.get("/Logout", Logout);
ProductRoutes.get("/Products", getAllProducts);
module.exports = authRoutes;
