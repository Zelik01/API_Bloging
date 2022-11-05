const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide the title"],
      unique: [true, "The title name already exists"],
    },
    description: {
      type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please provide the author"],
    },   
    state: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    read_count: {
      type: Number,
      default: 0,
    },
    reading_time: {
      type: Number,
      default: 0
    },
    tags: {
      type: [String],
    },
    body: {
      type: String,
      required: [true, "Please provide the body"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {collection:'Blog'}
  
);

const Blog = mongoose.model("Blog", postSchema);
module.exports = Blog;
