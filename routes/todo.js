///routes
const express = require("express");
const router = express.Router();
const {
  getTodoById,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  markTodoDone,
} = require("../controllers/todo");
router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id", markTodoDone);
module.exports = router;
