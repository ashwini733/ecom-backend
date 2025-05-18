const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
      minlength: [10, "Description must be at least 10 characters"],
    },
    catagory: {
      type: String,
      required: [true, "Ctegory is required"],
      enum: ["men's clothing", "women's clothing", "electronics", "jewelery"],
    },
    image: {
      type: String,
      required: [true, "image URL required"],
    },
    rating: {
      reate: {
        type: Number,
        required: [true, "Rating is required"],
        min: [0, "Rate cannot be below 0"],
        max: [5, "Rate cannot be above 5"],
      },
      count: {
        type: Number,
        required: [true, "Rating countt is required"],
        min: [0, "Count cannot be negative"],
      },
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
