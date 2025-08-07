import express from "express";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.json({ msg: "Hello students" });
});

// CRUD functionality of movies

// R - For Reading

app.get("/movies", () => {});

// C - For creating movies

app.post("/movies", () => {});

// U - For Updating Movies

app.put("/movies/:id", () => {});

//D - For delete movie

app.delete("/movies/:id", () => {});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
