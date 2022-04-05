// Imports
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Controllers

// Datebase

// Initialise Server
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`app is running on port ${port} `);
});

app.use((req, res, next) => {
  console.log(req.method + " " + req.url + " HTTP/" + req.httpVersion);
  console.log("-----------");
  next();
});

// -------- Endpoints --------
app.get("/", (req, res) => {
  res.send("Server live!");
});
