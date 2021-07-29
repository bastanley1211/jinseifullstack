const express = require("express");
const userRouter = express.Router();

userRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the user data to you");
  })
  .post((req, res) => {
    res.end(`POST operation not supported on /user`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`Updating user data`);
  })
  .delete((req, res) => {
    res.end("Deleting this user");
  });

userRouter
  .route("/:userDataId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `Will send all details of user data: ${req.params.userDataId} to you`
    );
  })
  .post((req, res) => {
    res.end(`POST operation not permitted on /user/${req.params.userDataId}`);
  })
  .put((req, res) => {
    res.write(`Updating the user data: ${req.params.postId}\n`);
    res.end(`Will update the user data: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting user data: ${req.params.postId}`);
  });

module.exports = userRouter;
