import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Movies } from "../entities";
import { movieRequestSchema, movieSchema } from "../schemas/movie.schema";

export type iMovieRequest = z.infer<typeof movieRequestSchema>;

export type iMovie = z.infer<typeof movieSchema>;

export type iMovieUpdate = DeepPartial<iMovieRequest>;

export type iMovieRepo = Repository<Movies>;
