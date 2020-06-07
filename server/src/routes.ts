import express from 'express';
import multer from "multer";
import multerConfig from "./config/multer";

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
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// Se fosse enviar mais de uma imagem seria upload.array('')
routes.post('/points', upload.single('image'), pointsController.create);

export default routes;
