import createRouter from './routes';
import logger from '../../logging';

const log = logger('Companies');

export default function () {
  return createRouter(log);
}
