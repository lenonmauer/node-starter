import { Router } from 'express';
import SignInController from './controllers/SignInController';

export default function apiRoutes() {
  const router = new Router();

  router.get('/', (req, res) => res.send('works'));

  router.get('/insert', SignInController.index);

  router.post('/signin', SignInController.store);

  return router;
}
