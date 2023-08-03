const axios = require("axios");

class PostCommentController {
  async index(request, response) {
    try {
      const postResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const commmentsResponse = await axios.get("https://jsonplaceholder.typicode.com/comments");

      const posts = postResponse.data;
      const comments = commmentsResponse.data;

      const postsWithComments = posts.map((post) => ({
        ...post,
        comments: comments.filter((comment) => comment.postId === post.id),
      }));

      return response.json(postsWithComments);
      
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Erro ao buscar os dados" });
    }
  }
}

module.exports = PostCommentController;
