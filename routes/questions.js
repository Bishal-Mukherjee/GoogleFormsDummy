const express = require("express");
const router = express.Router();
const {
  createQuestion,
  issueMarks,
  deleteQuestions,
  getQuestions,
} = require("../controllers/questions");

// @desc: add generate question set
router.post("/createQuestion", createQuestion);

// @desc: get questions
router.get("/getQuestions", getQuestions);

// @desc: issue marks on answer script submission
router.post("/issueMarks", issueMarks);

// @desc: delete question set
router.delete("/deleteQuestions", deleteQuestions);

module.exports = router;
