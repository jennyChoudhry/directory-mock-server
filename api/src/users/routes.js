import { Router } from 'express';
import { OK, CREATED } from 'http-status-codes';
import { handleValidationFailure } from '../errors';
import { validateKnownParams } from '../validation/helpers';

export default function createRouter(log) {
  const router = new Router();

  router.get('/', async (req, res, next) => {
    const knownParams = [ 'location_id', 'member_type' ];

    const unknownParamsErrors = validateKnownParams(knownParams, req.query);
    const validationResult = await req.getValidationResult();
    if (!validationResult.isEmpty() || unknownParamsErrors.length) {
      handleValidationFailure([ ...validationResult.array(), ...unknownParamsErrors ], res);
      return;
    }
    res.json({
      data: [
        {
          id: '2d1c0ef1-4c7c-4ed7-8940-b587d1ee7e6e',
          type: 'user',
          attributes: {
            name: 'Random user name',
            company_name: 'Random company name',
            title: 'user job title',
            avatar_url:
              'https://res-3.cloudinary.com/wework/image/upload/c_fill,h_250,w_250/v1/social_web/defaults/avatars/default_avatar_5.png',
          },
        },
      ],
    });
  });

  return router;
}
