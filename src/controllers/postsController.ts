import fs from 'fs';
import { Request, Response } from 'express';
import { Post, PostsModel } from '../models/postsModel';
import { generateDescriptionWithGemini } from '../services/geminiService';

export class PostsController {
  constructor(private postsModel: PostsModel) {}

  async listPosts(req: Request, res: Response) {
    const posts = await this.postsModel.getAllPosts();
    res.status(200).json(posts);
  }

  async createNewPost(req: Request, res: Response) {
    const newPost = req.body as Post;
    try {
      const createdPost = await this.postsModel.createPost(newPost);
      res.status(201).json(createdPost);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ erro: 'Falha na requisição' });
    }
  }

  async uploadImage(req: Request, res: Response) {
    const newPost: Post = {
      describe: '',
      imageUrl: req.file?.originalname as string,
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

  async updateNewPost(req: Request, res: Response) {
    const id = req.params.id;
    const imageUrl = `http://localhost:3000/${id}.png`;

    try {
      const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
      const alt = await generateDescriptionWithGemini(imageBuffer);
      const post = {
        describe: req.body.describe,
        imageUrl,
        alt,
      };
      const updatedPost = await this.postsModel.updatePost(id, post);
      res.status(200).json(updatedPost);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ erro: 'Falha na requisição' });
    }
  }
}
