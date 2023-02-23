import "express-async-errors";
import express, { Application } from "express";
import { movieRouter } from "./routers/movies.router";
import { errorHandler } from "./error";

export const app: Application = express();

app.use(express.json());

app.use("/movies", movieRouter);

app.use(errorHandler);
