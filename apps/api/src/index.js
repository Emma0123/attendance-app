const { join } = require("path");
require("dotenv").config({ path: join(__dirname, "../.env") });
const express = require("express");
const cors = require("cors");
const { log } = require("console");
const { resetPasswordRouter,usersRouter } = require("./router");
const PORT = process.env.PORT || 2500;
const app = express();
const bearerToken = require("express-bearer-token")
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bearerToken())

app.get("/api", (req, res) => {
  res.status(200).send("<h1>API in TURBOREPO</h1>");
});

// #define route here
app.use('/reset', resetPasswordRouter)
app.use("/users", usersRouter)

// not found
app.use((req, res, next) => {
  if (req.path.includes("/api/")) {
    res.status(404).send("Not found !");
  } else {
    next();
  }
});

// error
app.use((err, req, res, next) => {
  if (req.path.includes("/api/")) {
    console.error("Error : ", err);
    res.status(500).send(err);
  } else {
    console.error("ERROR HANDLING: ",err.stack);
    return res.status(err.rc || 500).json(err);
    // next();
  }
});

//#region CLIENT
const clientPath = "../../client/dist";
app.use(express.static(join(__dirname, clientPath)));

// Serve the HTML page
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, clientPath, "index.html"));
});


//#endregion
app.listen(PORT, () => console.log(`API RUNNING at `, PORT));
module.exports = app;
