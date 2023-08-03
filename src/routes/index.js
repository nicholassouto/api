const { Router } = require("express");

const postCommentRouter = require("./postComment.routes");

const routes = Router();

routes.use("/posts-comment", postCommentRouter);

module.exports = routes;
