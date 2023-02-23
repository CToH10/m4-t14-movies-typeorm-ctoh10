import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { iMovieRepo } from "../interfaces/movie.interface";

export const deleteMovieService = async (id: number) => {
  const movieRepo: iMovieRepo = AppDataSource.getRepository(Movies);

  const movie = await movieRepo.findBy({
    id: id,
  });

  await movieRepo.remove(movie!);
};
