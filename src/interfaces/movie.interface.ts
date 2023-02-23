import { z } from "zod";
import {
  moviePatchSchema,
  movieRequestSchema,
  movieSchema,
} from "../schemas/movie.schema";

export type iMovieRequest = z.infer<typeof movieRequestSchema>;

export type iMovie = z.infer<typeof movieSchema>;

export type iMovieUpdate = z.infer<typeof moviePatchSchema>;
