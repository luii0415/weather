const express = require("express");
const app = express();
const cors = require("cors");
const axdata = require("./data.js");

app.use(cors());

app.get("/", async (req, res) => {
  await axdata("강남구", (error, { airquality } = {}) => {
    if (error) {
      res.send(error);
    }
    res.send(airquality);
  });
});

app.listen(8000, () => {
  console.log("The server is running at port 8000");
});
