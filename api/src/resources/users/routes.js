import { Router } from 'express';
import { handleValidationFailure } from '../../errors';
import { validateKnownParams } from '../../validation/helpers';

export default function createRouter(log) {
  const router = new Router();

  // Gets new users and older users
  router.get('/', async (req, res, next) => {
    log.info(`GET ${req.url}`);
    const knownParams = [ 'location_id', 'member_type', 'page', 'per_page' ];

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
