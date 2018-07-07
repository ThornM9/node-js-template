const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.use("/public", express.static("./public"));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
