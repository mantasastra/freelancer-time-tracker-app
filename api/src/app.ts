import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as db from "./db";

import session from "./resources/session/Session.route";

const app = express();
db.connectDb();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/session", session);

export default app;
