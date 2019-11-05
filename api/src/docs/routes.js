import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec, { swaggerJson } from './swagger';

export default function createRouter() {
  const router = new Router();

  router.get('/json', (req, res) => {
    console.log(req.headers);
    res.send(swaggerJson);
  });

  router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  return router;
}
