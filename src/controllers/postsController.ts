import { Request, Response } from 'express';
import { PostsModel } from '../models/postsModel';

export class PostsController {
  constructor(private postsModel: PostsModel) {}

  async listPosts(req: Request, res: Response) {
    const posts = await this.postsModel.getAllPosts();
    res.status(200).json(posts);
  }
}
