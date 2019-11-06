import createRouter from './routes';
import logger from '../logging';

const log = logger('User');

export default function () {
  return createRouter(log);
}
