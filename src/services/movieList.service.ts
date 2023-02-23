import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { iMovie } from "../interfaces/movie.interface";

export const listAllMovies = async (): Promise<iMovie[]> => {
  const movieRepo = AppDataSource.getRepository(Movies);

  return await movieRepo.find();
};
