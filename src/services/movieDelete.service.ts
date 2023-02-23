import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movies } from "../entities";

export const deleteMovieService = async (id: number) => {
  const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);

  const movie = await movieRepo.findBy({
    id: id,
  });

  await movieRepo.remove(movie!);
};
