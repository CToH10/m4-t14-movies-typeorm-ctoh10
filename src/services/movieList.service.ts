import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { iMovie, iMovieRepo } from "../interfaces/movie.interface";

export const listAllMovies = async (params: any) => {
  const movieRepo: iMovieRepo = AppDataSource.getRepository(Movies);

  let page: number | undefined = Number(params.page);
  let perPage: number | undefined = Number(params.perPage);

  let sort: string = params.sort?.toString().toLowerCase() || "";
  let order: "ASC" | "DESC" = params.order?.toString().toUpperCase() || "ASC";

  page <= 1 || Number.isNaN(page) ? (page = 1) : page;
  perPage <= 0 || perPage > 5 || Number.isNaN(perPage)
    ? (perPage = 5)
    : perPage;

  sort === "price" || sort === "duration" ? sort : (sort = "id");
  sort === "id" ? (order = "ASC") : sort;

  const nextPage: number = Number(params.page) === 0 ? 1 : page + 1;

  let orderDB = {
    [sort]: order,
  };

  const movies: iMovie[] = await movieRepo.find({
    take: perPage,
    skip: perPage * (page - 1),
    order: orderDB,
  });

  const maxMovies: number = (await movieRepo.find()).length;

  return {
    previousPage:
      perPage * (page - 1) === 0
        ? null
        : `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`,
    nextPage:
      page * perPage >= maxMovies
        ? null
        : `http://localhost:3000/movies?page=${nextPage}&perPage=${perPage}`,
    count: maxMovies,
    data: movies,
  };
};
