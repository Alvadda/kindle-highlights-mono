import { Router } from "express";
import { getRndHighlights } from "../controller/highlights.controller";

const router = Router();

router.get("/", getRndHighlights);

export default router;
