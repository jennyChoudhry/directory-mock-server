import http from 'http';
import express from 'express';
import cors from 'cors';
import expressValidator from 'express-validator';
import { json } from 'body-parser';

import logger from './logging';

import permissions from './resources/permissions';
import users from './resources/users';
import directory from './resources/directory';
import companies from './resources/companies';

import packageJson from '../../package.json';

const port = 4000;
const log = logger();

main().catch(err => log.error({ err }, 'Unable to start API server'));

async function main() {
  log.info(`v${packageJson.version}`);

  log.info('Registering middleware');
  const app = express();
  app.use(cors());
  app.use(json({ limit: '50mb' }));
  app.use(expressValidator());
  app.disable('etag');

  log.info('Registering routes');
  const api = express.Router();

  api.get('/health', (req, res) => {
    res.json({ message: 'Luna is healthy' });
  });

  api.use('/permissions', permissions());
  api.use('/users', users());
  api.use('/directory', directory());
  api.use('/companies', companies());

  app.use('/api/v13', api);

  log.info('Starting API server');
  app.server = http.createServer(app);
  app.server.listen(port, () => {
    log.info(`API started on port ${app.server.address().port}`);
  });
}
