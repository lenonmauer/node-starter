import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import config from '../config';
import routes from '../api/routes';

import middlewareOnly from '../middlewares/only';
import middlewareNotFound from '../middlewares/not-found';
import middlewareGeneralError from '../middlewares/general-error';

export default () => {
  const app = express();

  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.enable('trust proxy');

  app.use(helmet());
  app.use(compression());
  app.use(cors());
  app.use(bodyParser.json());

  app.use(middlewareOnly());

  app.use(config.api.prefix, routes());

  app.use(middlewareNotFound());

  app.use(middlewareGeneralError());

  return app;
};
