import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const postMovieMiddle =
  (schema: ZodTypeAny) =>
  (
    request: Request,
    response: Response,
    next: NextFunction
  ): Response | void => {
    const validatedData = schema.parse(request.body);

    request.body = validatedData;

    return next();
  };
