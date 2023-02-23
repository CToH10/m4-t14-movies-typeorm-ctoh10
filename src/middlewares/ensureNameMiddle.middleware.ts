import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

export const ensureNameMiddle = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepo = AppDataSource.getRepository(Movie);
  const movieName = await movieRepo.findOneBy({
    name: request.body.name || "",
  });

  if (movieName) {
    throw new AppError("Name already exists", 409);
  }

  return next();
};
