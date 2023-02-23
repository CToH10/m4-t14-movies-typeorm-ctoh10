import { Request, Response } from "express";
import { Movies } from "../entities";
import { iMovieRequest } from "../interfaces/movie.interface";
import { listAllMovies } from "../services/movieList.service";
import { createMovie } from "../services/moviePost.service";

export const postMovieController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const movie: iMovieRequest = request.body;
  const createdMovie = await createMovie(movie);
  return response.status(200).json(createdMovie);
};

export const listMoviesController = async (
  request: Request,
  response: Response
) => {
  const movies = await listAllMovies();

  if (movies.length === 0) {
    return response.status(404).json({ message: "No movies found" });
  }

  return response.json(movies);
};
