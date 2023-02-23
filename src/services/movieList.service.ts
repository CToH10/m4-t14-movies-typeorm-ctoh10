import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { iMovie } from "../interfaces/movie.interface";

export const listAllMovies = async (params: any) => {
  const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);

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

  let orderDB = {
    [sort]: order,
  };

  const movies: iMovie[] = await movieRepo.find({
    take: perPage,
    skip: perPage * (page - 1),
    order: orderDB,
  });

  const maxMovies: number = (await movieRepo.find()).length;

  // if (page * perPage > maxMovies) {
  //   console.log("mais que poderia");
  // }

  return {
    previousPage: "string",
    nextPage: "string",
    count: maxMovies,
    data: movies,
  };
};
