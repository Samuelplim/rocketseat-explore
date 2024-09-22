import express, { NextFunction, Request, Response, Errback } from "express";
import cors from "cors";
import { routes } from "./routes";
import { AppError } from "./utils/AppError";
import { connection } from "./database";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(
  (
    error: Errback,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: error,
    });
  }
);

connection
  .raw("SELECT NOW()")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
app.listen(3333, () => console.log(`Server is running on Port ${3333}`));
