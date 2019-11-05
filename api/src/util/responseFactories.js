import { NOT_FOUND } from 'http-status-codes';

export const createDaoResponse = (rows, rowsAffected) => ({
  rowsAffected: rowsAffected !== undefined ? rowsAffected : rows.length,
  rows,
});

export const createServiceSuccessResponse = data => ({ success: true, data });

export const createServiceFailureResponse = (errorCode, errorMessage) => ({ success: false, errorCode, errorMessage });

export const notFoundResponse = (resourceDescriptor, id) =>
  createServiceFailureResponse(NOT_FOUND, `${resourceDescriptor} with ID ${id} not found`);
