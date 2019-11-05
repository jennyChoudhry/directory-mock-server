import { respondBadRequest } from './errorResponse';

export default function handleValidationFailure(validationErrors, res) {
  respondBadRequest(res, 'Invalid input', { validationErrors });
}
