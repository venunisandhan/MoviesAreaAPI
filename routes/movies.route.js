import express from "express";

const router = express.Router();
// R - For Reading

router.get("/", (req, res) => {
  res.send("Get all movies list");
});

// C - For creating movies

router.post("/", (req, res) => {
  res.send("Create a movie");
});

// U - For Updating Movies

router.put("/:id", (req, res) => {
  res.send("Update a movie");
});

//D - For delete movie

router.delete("/:id", (req, res) => {
  res.send("Delete a movie");
});

export default router;
