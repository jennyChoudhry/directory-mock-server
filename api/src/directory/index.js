import createRouter from './routes';
import logger from '../logging';

const log = logger('Directory');

export default function () {
  return createRouter(log);
}
