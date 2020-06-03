import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Rota: Endereço completo da nossa requisição http://localhost:3333/users
// Recurso: Qual entidade estamos acessando do sistema users

// GET: Buscar uma ou mas informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente do back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso (obrigatório)
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação (opcional)
// Request Body: Parâmetros para criação/atualização de informações

app.listen(3333);
