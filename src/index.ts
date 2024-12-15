import express from 'express';
import router from './routes';

const app = express();
app.use(express.json());

app.use(router);

const port = 5000;
app.get('/', (req, res) => {
  res.send('Servidor rodando com TypeScript!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
