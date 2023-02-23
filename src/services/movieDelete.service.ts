import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { iMovieRepo } from "../interfaces/movie.interface";

export const deleteMovieService = async (id: number) => {
  const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie);

  const movie = await movieRepo.findBy({
    id: id,
  });

  await movieRepo.remove(movie!);
};
