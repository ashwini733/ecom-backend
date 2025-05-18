const express = require("express");
const { config } = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const cartItemRoutes = require("./routes/cartItemRoutes");
const cookieParser = require("cookie-parser");
const favouriteRoutes = require("./routes/favouriteRoutes");

config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/cart", cartItemRoutes);
app.use("/api/favourite", favouriteRoutes);
const PORT = 5000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
