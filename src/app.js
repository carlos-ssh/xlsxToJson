import express from "express";
import morgan from "morgan";
import { jsonParser, urlencodedParser } from './middlewares/bodyParsers.js';
import createJsonRoute from "./routes/createJson.routes.js";

const app = express();

app.use(jsonParser);
app.use(urlencodedParser);

app.use(morgan("dev"));
app.use(express.json());
app.use('/api', createJsonRoute);

export default app;
