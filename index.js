//importing modules
const express = require("express");
const app = express(); //initializing express app
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const todoRoutes = require("./routes/todo");

app.use(bodyParser.json());
app.use("/api", todoRoutes);
//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
