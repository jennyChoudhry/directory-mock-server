import createRouter from './routes';
import logger from '../logging';

const log = logger('FlightPlans');

export default function (db) {
  return createRouter(log);
}
