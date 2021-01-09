import { Router } from "express";
import * as SessionController from "./Session.controller";

const router = Router();

router.post("/add", SessionController.addSession);

router.get("/list", SessionController.getAllSessions);

router.get("/overview", SessionController.getOverview);

export default router;
