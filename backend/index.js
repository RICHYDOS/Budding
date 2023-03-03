import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/budding')
    .then(() => console.log("Connected to MongoDb..."))
    .catch(err => console.error("Could not connect to MongoDb", err));

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));