const express = require("express");

const cors = require("cors");

const app = express();

const postCommentRoutes = require("./routes/postComment.routes");

app.use(cors());
app.use(express.json());
app.use("/api/posts-comments", postCommentRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server ir running on Port ${PORT}`));
