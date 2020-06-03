import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// PADRAO
// index, show, create, update, delete
// index: listagem
// show: listar um único registro
// create: criar um registro
// update: atualizar um registro
// delete: apagar um registro

// DICAS
// Service Pattern
// Repository Pattern (Data Mapper)

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
