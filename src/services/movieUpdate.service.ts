import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  iMovie,
  iMovieRepo,
  iMovieUpdate,
} from "../interfaces/movie.interface";

export const updateMovieService = async (
  data: iMovieUpdate,
  id: number
): Promise<iMovie> => {
  const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie);

  const oldMovieInfo = await movieRepo.findOneBy({ id: id });
  const newMovieInfo = movieRepo.create({
    ...oldMovieInfo,
    ...data,
  });

  await movieRepo.save(newMovieInfo);

  return newMovieInfo;
};
