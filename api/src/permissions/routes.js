import { Router } from 'express';
import { OK, CREATED } from 'http-status-codes';
import { handleValidationFailure } from '../errors';
import { validateKnownParams } from '../validation/helpers';

export default function createRouter(log) {
  const router = new Router();

  router.get('/', async (req, res, next) => {
    const knownParams = [ 'permissions' ];

    const unknownParamsErrors = validateKnownParams(knownParams, req.query);
    const validationResult = await req.getValidationResult();
    if (!validationResult.isEmpty() || unknownParamsErrors.length) {
      handleValidationFailure([ ...validationResult.array(), ...unknownParamsErrors ], res);
      return;
    }
    res.json({
      data: [
        {
          id: 'mena_company_directory',
          type: 'permission',
          attributes: {
            is_active: true,
          },
        },

        {
          id: 'mena_user_directory',
          type: 'permission',
          attributes: {
            is_active: true,
          },
        },
      ],
    });
  });

  router.delete('/:policy_name', async (req, res, next) => {
    res.status(OK);
  });

  router.post('/:policy_name', async (req, res, next) => {
    res.status(CREATED);
  });

  return router;
}
