const express = require("express");
const feedRouter = express.Router();

feedRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send the post feed to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the post: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /feed");
  })
  .delete((req, res) => {
    res.end("Deleting the entire post feed");
  });

feedRouter
  .route("/:postId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send all details of post: ${req.params.postId} to you`);
  })
  .post((req, res) => {
    res.end(
      `Will add the post: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the post: ${req.params.postId}\n`);
    res.end(`Will update the post: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting post: ${req.params.postId}`);
  });

module.exports = feedRouter;
