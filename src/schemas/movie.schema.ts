import { z } from "zod";

export const movieRequestSchema = z.object({
  name: z.string().max(50),
  description: z.string().optional(),
  price: z.number().int(),
  duration: z.number().positive(),
});

export const movieSchema = movieRequestSchema.extend({
  id: z.number(),
});

export const moviePatchSchema = movieSchema
  .omit({
    id: true,
  })
  .partial();
