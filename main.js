import express from "express";
import movieRoutes from "./routes/movies.route.js";
import { connect } from "mongoose";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 3000;

//Connecting DB
connectDB();

//Data understanding middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("=== MIDDLEWARE HIT ===");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("======================");
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello students!!" });
});

// CRUD functionality of movies

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
