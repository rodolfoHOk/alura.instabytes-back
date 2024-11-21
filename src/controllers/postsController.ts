import fs from 'fs';
import { Request, Response } from 'express';
import { PostsModel } from '../models/postsModel';

export class PostsController {
  constructor(private postsModel: PostsModel) {}

  async listPosts(req: Request, res: Response) {
    const posts = await this.postsModel.getAllPosts();
    res.status(200).json(posts);
  }

  async createNewPost(req: Request, res: Response) {
    const newPost = req.body;
    try {
      const createdPost = await this.postsModel.createPost(newPost);
      res.status(201).json(createdPost);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ erro: 'Falha na requisição' });
    }
  }

  async uploadImage(req: Request, res: Response) {
    const newPost = {
      describe: '',
      imageUrl: req.file?.originalname,
      alt: '',
    };
    try {
      const createdPost = await this.postsModel.createPost(newPost);
      const updatedImage = `uploads/${createdPost.insertedId}.png`;
      fs.renameSync(req.file?.path as string, updatedImage);
      res.status(201).json(createdPost);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ erro: 'Falha na requisição' });
    }
  }
}
