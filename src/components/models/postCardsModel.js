const mongoose = require("mongoose");
const validator = require("validator");

const postCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title field is required"],
    minlength: 2,
    maxlength: 30,
  },
  content: {
    type: String,
    required: [true, "Some content is required"],
    minlength: 2,
    maxlength: 800,
  },
  imageUrl: {
    type: String,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "You must enter a valid URL",
    },
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "The owner field is required."],
    ref: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Card", postCardSchema);
