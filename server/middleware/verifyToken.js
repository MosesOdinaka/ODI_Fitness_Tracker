import jwt from "jsonwebtoken";
import { createError } from "../error.js";

/**
 * Middleware function to verify JSON Web Token (JWT) in the request header.
 * If the token is valid, it attaches the decoded user information to the request object.
 * If the token is missing or invalid, it returns an authentication error.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
export const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return next(createError(401, "You are not authenticated!"));
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) return next(createError(401, "You are not authenticated"));

    const decode = jwt.verify(token, process.env.JWT);
    req.user = decode;
    return next();
  } catch (err) {
    next(err);
  }
};
