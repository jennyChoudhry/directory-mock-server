import { contains } from 'ramda';

import { INVALID_PARAM } from './messages';

export function validateKnownParams(knownParams, params) {
  const isKnownParam = param => contains(param, knownParams);
  return Object.keys(params).reduce(
    (accum, param) => isKnownParam(param) ? accum : [ ...accum, { msg: INVALID_PARAM, param } ],
    []
  );
}
