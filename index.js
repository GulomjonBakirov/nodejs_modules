const { fork } = require("child_process");

const express = require("express");
const app = express();

app.get("/:nums", (req, res, next) => {
  let nums = req.params.nums;
  nums = Number(nums);

  const child = fork("isPrime.js");
  child.send(nums);

  child.on("message", (message) => {
    res.json(message);
  });

  child.on("exit", (code) => console.log("Exited Code: ", code));
});

app.listen(8080);
