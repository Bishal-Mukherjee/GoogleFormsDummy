const Question = require("../models/Questions");

exports.createQuestion = async (req, res) => {
  const { paper } = req.body;
  const questions = Question({
    paper,
  });
  await questions.save();
  res.status(200).json({ paper: questions });
};

exports.getQuestions = async (req, res) => {
  const questions = await Question.find({});
  if (questions) res.status(200).json({ questions: questions[0].paper });
  else res.status(404).json({ message: "NO QUESTIONS FOUND" });
};

exports.issueMarks = async (req, res) => {
  const { answers } = req.body;
  let marksScored = 0;
  const fetchedQuestion = await Question.find();
  const paper = fetchedQuestion[0].paper;

  answers.map((a, i) => {
    if (a == paper[i].correctOption) ++marksScored;
  });
  res.status(200).json({ marksScored });
};

exports.deleteQuestions = async (req, res) => {
  const question = await Question.find({});
  Question.collection.deleteOne(question[0]);
  res.status(200).json({ message: "DELETED SUCCESSFULLY" });
};
