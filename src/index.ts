
import 'dotenv/config'
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';
import express from 'express';

const port = process.env.PORT || 3000;

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);

api.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
});