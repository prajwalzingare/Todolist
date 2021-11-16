//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const items = ["Buy food", "cook food", "eat food"];
const workItems = [];

// Set EJS as templating engine
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDay();
  res.render("list", { listTitle: day, newlistitems: items });
});

app.post("/", function (req, res) {
  const item = req.body.newitem;
  if (req.body.list === "WorkList") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "WorkList", newlistitems: workItems });
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.listen(8000, function () {
  console.log("server started on port 8000");
});
