import express from 'express';
import { postRoutes } from './routes/postRoutes';

const app = express();

app.use(express.static('uploads'));

postRoutes(app);

app.listen(3000, async () => {
  console.log('Servidor escutando...');
});

// app.get('/posts/:id', (req, res) => {
//   const index = findPostById(Number(req.params.id));
//   res.status(200).json(posts[index]);
// });

// function findPostById(id: number): number {
//   return posts.findIndex((post) => post.id === Number(id));
// }
