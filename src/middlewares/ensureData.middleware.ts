import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { AppError } from "../error";

export const ensureData =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction): void => {
    if (Object.keys(request.body).length === 0) {
      throw new AppError("At least one key must be sent");
    }
    const validatedData = schema.parse(request.body);

    request.body = validatedData;

    return next();
  };
