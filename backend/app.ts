import express from 'express';
import cors from 'cors';
import usuario from './src/routes/usuarioRoutes.ts';
import login from './src/routes/login.ts';
import peca from "./src/routes/pecaRoutes";

const app = express();

app.use(express.static("./sistema"))
app.use(cors(), express.json(), login, usuario, peca);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor!');
});

app.listen(3000, () => {
  console.log("A API está rodando na porta 3000");
});