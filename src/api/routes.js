import { Router } from 'express';
import SignInController from './controllers/SignInController';

export default function apiRoutes() {
  const router = new Router();

  router.head('/stats', (req, res) => res.send('ok'));

  router.post('/signin', SignInController.store);

  return router;
}
