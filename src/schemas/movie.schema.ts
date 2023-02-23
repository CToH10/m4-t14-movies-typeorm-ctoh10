import { z } from "zod";
import { number } from "zod/lib";

export const movieRequestSchema = z.object({
  name: z.string().max(50),
  description: z.string(),
  price: z.number(),
  duration: z.number(),
});

export const movieSchema = movieRequestSchema.extend({
  id: z.number(),
});

export const moviePatchSchema = movieSchema.omit({
  id: true,
});
