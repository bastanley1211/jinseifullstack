const express = require("express");
const morgan = require("morgan");
const homeRouter = require("./routes/homeRouter");
const feedRouter = require("./routes/feedRouter");
const userRouter = require("./routes/userRouter");
const settingRouter = require("./routes/settingRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/home", homeRouter);
app.use("/feed", feedRouter);
app.use("/user", userRouter);
app.use("/settings", settingRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
