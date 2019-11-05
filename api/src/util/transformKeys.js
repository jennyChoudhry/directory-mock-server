// applies a transformation function to the keys of an object to return a
// new object with same values and transformed keys
import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';

// const resultsMap = {
//   aircraftId: 'aircraft',
//   flightPlanId: 'flightPlan',
//   routes: 'routes'
// }
export const recordToModel = record => transformKeys(record, camelCase);
export const modelToRecord = record => transformKeys(record, snakeCase);

export default function transformKeys(obj, transform) {
  return Object.keys(obj).reduce(
    (accum, key) => ({
      ...accum,
      [transform(key)]: obj[key],
    }),
    {}
  );
}
