/**
 * Creates a custom error object with a specified status and message.
 *
 * @param {number} status - The HTTP status code for the error.
 * @param {string} message - The error message.
 * @returns {Error} - The custom error object with the provided status and message.
 */
export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
  };
  