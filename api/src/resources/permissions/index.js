import createRouter from './routes';
import logger from '../../logging';

const log = logger('Permissions');

export default function () {
  return createRouter(log);
}
