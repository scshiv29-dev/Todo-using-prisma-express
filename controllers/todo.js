const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.json(todo);
};

exports.getTodos = async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
};
exports.createTodo = async (req, res) => {
  const todo = await prisma.todo.create({
    data: {
      title: req.body.title,
    },
  });
  res.json(todo);
};

exports.updateTodo = async (req, res) => {
  const todo = await prisma.todo.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      title: req.body.title,
      description: req.body.description,
    },
  });
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const todo = await prisma.todo.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(todo);
};

exports.markTodoDone = async (req, res) => {
  const todo = await prisma.todo.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      completed: true,
    },
  });
  res.json(todo);
};
