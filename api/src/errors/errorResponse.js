import { badRequest, notFound } from 'boom';

export function respondBadRequest(res, message = 'Bad request', errorProps = {}) {
  const { statusCode, payload } = badRequest(message).output;
  res.status(statusCode).send({
    ...payload,
    ...errorProps,
  });
}

export function respondNotFound(res, message = 'Not found', errorProps = {}) {
  const { statusCode, payload } = notFound(message).output;
  res.status(statusCode).send({
    ...payload,
    ...errorProps,
  });
}
