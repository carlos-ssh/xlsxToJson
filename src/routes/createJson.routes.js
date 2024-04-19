import { Router } from "express";
import createJson from "../controllers/createJson.controller.js";

const router = Router();

router.post("./createJson", createJson);

export default router;
