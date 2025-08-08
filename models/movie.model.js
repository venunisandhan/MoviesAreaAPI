import { model, Schema } from "mongoose";

//Write the schema

const schema = new Schema({
  title: String,
  desc: String,
});

const Movie = model("Movie", schema);

export default Movie;
