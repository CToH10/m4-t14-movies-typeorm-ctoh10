import { Router } from "express";
import {
  deleteMovieController,
  listMoviesController,
  postMovieController,
  updateMovieController,
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
movieRouter.patch(
  "/:id",
  ensureMovieExists,
  ensureNameMiddle,
  updateMovieController
);
movieRouter.delete("/:id", ensureMovieExists, deleteMovieController);
