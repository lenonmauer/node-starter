import { Router } from 'express';
import SignInController from './controllers/SignInController';

export default function apiRoutes(apiBaseURL) {
  const router = new Router();
  const apiRouter = new Router();

  router.use(apiBaseURL, apiRouter);

  router.get('/', (req, res) => res.send('server works.'));

  apiRouter.get('/', (req, res) => res.send('api works.'));

  apiRouter.get('/insert', SignInController.index);

  apiRouter.post('/signin', SignInController.store);

  return router;
}
