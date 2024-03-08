import logger from "morgan";
import express from "express";
import cors from "cors";
import ordersRouter from "./routes/ordersRouter.js";
import shopsRouter from "./routes/shopsRouter.js"

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/shops", shopsRouter);
app.use("/api/order", ordersRouter);

export default app;
