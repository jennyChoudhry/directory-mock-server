import { Router } from 'express';
import { handleValidationFailure } from '../errors';
import { validateKnownParams } from '../validation/helpers';

export default function createRouter(log) {
  const router = new Router();

  router.get('/', async (req, res, next) => {
    const knownParams = [
      'aircraftId',
      'airlineIcaoId',
      'operatorAirlineIcaoId',
      'departureStationIcaoId',
      'arrivalStationIcaoId',
    ];

    const unknownParamsErrors = validateKnownParams(knownParams, req.query);
    const validationResult = await req.getValidationResult();
    if (!validationResult.isEmpty() || unknownParamsErrors.length) {
      handleValidationFailure([ ...validationResult.array(), ...unknownParamsErrors ], res);
      return;
    }

    res.json({ message: 'hello world' });
 
  });



  return router;
}
