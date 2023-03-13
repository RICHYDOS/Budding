import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import products from "./routes/products.js";
import carts from "./routes/carts.js";
import users from "./routes/users.js";
import login from "./routes/login.js";

dotenv.config();

const app = express();

if (!process.env.jwtPrivateKey) {
    console.error("FATAL ERROR: jwtPrivateKey not defined");
    process.exit(1);
}

mongoose.set('strictQuery', true);
mongoose.connect(process.env.connectionString)
    .then(() => console.log("Connected to MongoDb..."))
    .catch(err => console.error("Could not connect to MongoDb", err));

app.use(express.json());
app.use("/api/users", users);
app.use("/api/login", login);
app.use("/api/products", products);
app.use("/api/carts", carts);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));