import { AppDataSource } from "./data-source";
import { app } from "./app";
import "dotenv/config";

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected");

    const port = process.env.PORT || 3000;
    const message: string = `Running on http://localhost:${port}`;

    app.listen(port, () => {
      console.log(message);
    });
  })
  .catch((err) => {
    console.error(err);
  });
