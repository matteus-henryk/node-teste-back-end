import "reflect-metadata"
import "dotenv/config";
import "./database";
import "./container"
import "express-async-errors"

import express, { Request, Response, NextFunction } from "express";
import { errors } from "celebrate";
import routes from "./routes";
import ErrorsApp from "./errors/ErrorsApp";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof ErrorsApp) {
    return response
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

app.listen(process.env.PORT || 3030, () => {
  console.log("Server is running!");
});
