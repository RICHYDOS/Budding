import express from "express";
import mongoose from "mongoose";
import products from "./routes/products.js";
import carts from "./routes/carts.js";
import users from "./routes/users.js";
const app = express();
import config from "config";

if (!config.get("jwtPrivateKey")) {
    console.error("FATAL ERROR: jwtPrivateKey not defined");
    process.exit(1);
}

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/budding')
    .then(() => console.log("Connected to MongoDb..."))
    .catch(err => console.error("Could not connect to MongoDb", err));

app.use(express.json());
app.use("/api/products", products);
app.use("/api/carts", carts);
app.use("/api/users", users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));