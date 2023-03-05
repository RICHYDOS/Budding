import express from "express";
import mongoose from "mongoose";
import products from "./routes/products.js";
import carts from "./routes/carts";
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/budding')
    .then(() => console.log("Connected to MongoDb..."))
    .catch(err => console.error("Could not connect to MongoDb", err));

app.use(express.json());
app.use("/api/products", products);
app.use("/api/carts", carts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));