const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  answers: [
    {
      questionId: {
        type: Number,
      },
      givenAnswer: {
        type: String,
      },
    },
  ],
});

module.exports = Answer = mongoose.model("answer", answerSchema);
