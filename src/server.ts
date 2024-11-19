import express from 'express';

const posts = [
  {
    id: 1,
    describe: 'Uma foto teste',
    image: 'https://placecats.com/millie/300/150',
  },
  {
    id: 2,
    describe: 'Um lindo pôr do sol',
    image: 'https://source.unsplash.com/random/300x150/?sunset',
  },
  {
    id: 3,
    describe: 'Montanhas nevadas',
    image: 'https://source.unsplash.com/random/300x150/?mountains',
  },
  {
    id: 4,
    describe: 'Uma deliciosa refeição',
    image: 'https://source.unsplash.com/random/300x150/?food',
  },
  {
    id: 5,
    describe: 'Um animal fofo',
    image: 'https://source.unsplash.com/random/300x150/?animal',
  },
  {
    id: 6,
    describe: 'Uma cidade vibrante',
    image: 'https://source.unsplash.com/random/300x100/?city',
  },
];

const app = express();
app.use(express.json());

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});
app.get('/posts/:id', (req, res) => {
  const index = findPostById(Number(req.params.id));
  res.status(200).json(posts[index]);
});

app.listen(3000, () => {
  console.log('Servidor escutando...');
});

function findPostById(id: number): number {
  return posts.findIndex((post) => post.id === Number(id));
}
