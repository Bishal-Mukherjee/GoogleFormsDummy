const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  paper: [
    {
      _id: false,
      questionText: {
        type: String,
      },
      option1: {
        type: String,
      },
      option2: {
        type: String,
      },
      option3: {
        type: String,
      },
      option4: {
        type: String,
      },
      answerText: {
        type: String,
      },
      correctOption: {
        type: String,
      },
    },
  ],
});

module.exports = Question = mongoose.model("question", questionSchema);
