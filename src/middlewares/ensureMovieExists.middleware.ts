import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { AppError } from "../error";

export const ensureMovieExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);

  const foundMovie = await movieRepo.findBy({
    id: parseInt(request.params.id),
  });

  if (!foundMovie[0]) {
    throw new AppError("Movie does not exist", 404);
  }

  return next();
};
