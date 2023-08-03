const express = require("express");
const PostCommentController = require("../controller/postCommentController");
const postCommentRoutes = express.Router();

const postCommentController = new PostCommentController();

postCommentRoutes.get("/", postCommentController.index);

module.exports = postCommentRoutes;
