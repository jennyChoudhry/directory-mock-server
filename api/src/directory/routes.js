import { Router } from 'express';
import { OK, CREATED } from 'http-status-codes';
import { handleValidationFailure } from '../errors';
import { validateKnownParams } from '../validation/helpers';

export default function createRouter(log) {
  const router = new Router();

  router.get('/', async (req, res, next) => {
    const knownParams = [ 'location_id' ];

    const unknownParamsErrors = validateKnownParams(knownParams, req.query);
    const validationResult = await req.getValidationResult();
    if (!validationResult.isEmpty() || unknownParamsErrors.length) {
      handleValidationFailure([ ...validationResult.array(), ...unknownParamsErrors ], res);
      return;
    }
    res.json({
      data: {
        id: 'directory_stats',
        type: 'directory_stats',
        attributes: {
          company_total_count: 5,
          user_total_count: 2000,
        },
      },
    });
  });

  return router;
}
