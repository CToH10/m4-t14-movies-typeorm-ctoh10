import { Request, Response } from "express";
import { iMovie, iMovieRequest } from "../interfaces/movie.interface";
import { deleteMovieService } from "../services/movieDelete.service";
import { listAllMovies } from "../services/movieList.service";
import { createMovie } from "../services/moviePost.service";
import { updateMovieService } from "../services/movieUpdate.service";

export const postMovieController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const movie: iMovieRequest = request.body;
  const createdMovie = await createMovie(movie);
  return response.status(201).json(createdMovie);
};

export const listMoviesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const movies = await listAllMovies(request.query);

  if (movies.data.length === 0) {
    return response.status(404).json({ message: "No movies found" });
  }

  return response.json(movies);
};

export const updateMovieController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const movieUpdated: iMovie = await updateMovieService(
    request.body,
    parseInt(request.params.id)
  );
  return response.json(movieUpdated);
};

export const deleteMovieController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  await deleteMovieService(parseInt(request.params.id));
  return response.status(204).send();
};
