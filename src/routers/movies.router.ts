import { Router } from "express";
import {
  listMoviesController,
  postMovieController,
} from "../controllers/movies.controller";
import { ensureData } from "../middlewares/ensureData.middleware";
import { movieRequestSchema } from "../schemas/movie.schema";

export const movieRouter: Router = Router();

movieRouter.post("", ensureData(movieRequestSchema), postMovieController);
movieRouter.get("", listMoviesController);
