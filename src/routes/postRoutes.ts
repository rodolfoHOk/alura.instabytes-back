import express, { Express } from 'express';
import { PostsController } from '../controllers/postsController';
import { PostsModel } from '../models/postsModel';

export const postRoutes = async (app: Express) => {
  app.use(express.json());

  const postModel = await PostsModel.createPostsModel();
  const postController = new PostsController(postModel);
  app.get('/posts', async (req, res) => postController.listPosts(req, res));
};
