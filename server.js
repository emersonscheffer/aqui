require("./src/models/User");
require("./src/models/Ad");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/authRoutes");

const adRoutes = require("./src/routes/adRoutes");

const requireAuth = require("./src/middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(adRoutes);

const mongoUri = "mongodb://localhost:27017/aqui";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", err => {
  console.log("Error connecting to Mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}, http://localhost:${PORT}`);
});
