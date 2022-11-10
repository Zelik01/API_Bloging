const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    created_at: Date,
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
  {collection:'Post'}
  
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
