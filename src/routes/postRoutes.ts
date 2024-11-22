import express, { Express } from 'express';
import multer from 'multer';
import { PostsController } from '../controllers/postsController';
import { PostsModel } from '../models/postsModel';
import cors, { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200,
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: './uploads', storage });

export const postRoutes = async (app: Express) => {
  app.use(express.json());
  app.use(cors(corsOptions));

  const postModel = await PostsModel.createPostsModel();
  const postController = new PostsController(postModel);

  app.get('/posts', async (req, res) => postController.listPosts(req, res));

  app.post('/posts', async (req, res) =>
    postController.createNewPost(req, res)
  );

  app.post('/upload', upload.single('image'), async (req, res) =>
    postController.uploadImage(req, res)
  );

  app.put('/upload/:id', async (req, res) =>
    postController.updateNewPost(req, res)
  );
};
