import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  iMovie,
  iMovieRepo,
  iMovieRequest,
} from "../interfaces/movie.interface";

export const createMovie = async (movie: iMovieRequest): Promise<iMovie> => {
  const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie);
  const movieReq = movieRepo.create(movie);

  await movieRepo.save(movieReq);

  return movieReq;
};
