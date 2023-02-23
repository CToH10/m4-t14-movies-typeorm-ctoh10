import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { iMovie, iMovieRequest } from "../interfaces/movie.interface";

export const createMovie = async (movie: iMovieRequest): Promise<iMovie> => {
  const movieRepo: any = AppDataSource.getRepository(Movies);
  const movieReq = movieRepo.create(movie);

  await movieRepo.save(movieReq);

  return movieReq;
};
