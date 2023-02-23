import { Router } from "express";
import {
  listMoviesController,
  postMovieController,
} from "../controllers/movies.controller";
import { ensureData } from "../middlewares/ensureData.middleware";
import { ensureMovieExists } from "../middlewares/ensureMovieExists.middleware";
import { ensureNameMiddle } from "../middlewares/ensureNameMiddle.middleware";
import { movieRequestSchema } from "../schemas/movie.schema";

export const movieRouter: Router = Router();

movieRouter.post(
  "",
  ensureData(movieRequestSchema),
  ensureNameMiddle,
  postMovieController
);
movieRouter.get("", listMoviesController);
movieRouter.patch("/:id", ensureMovieExists, ensureNameMiddle);
movieRouter.delete("/:id", ensureMovieExists);
