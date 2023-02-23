import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";
import { iMovieRepo } from "../interfaces/movie.interface";

export const ensureMovieExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie);

  const foundMovie = await movieRepo.findBy({
    id: parseInt(request.params.id),
  });

  if (!foundMovie[0]) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};
