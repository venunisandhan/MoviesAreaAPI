import express from "express";
import {
  MovieIndex,
  MovieCreate,
  MovieDelete,
  MovieUpdate,
} from "../controllers/movies.controller.js";

const router = express.Router();
// R - For Reading

router.get("/", MovieIndex);

// C - For creating movies

router.post("/", MovieCreate);

// U - For Updating Movies

router.put("/:id", MovieUpdate);

//D - For delete movie

router.delete("/:id", MovieDelete);

export default router;
