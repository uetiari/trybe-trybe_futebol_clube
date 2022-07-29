import { Router } from "express";
import learderboardController from "../controllers/leaderboardController";

const router = Router();

router.get('/home', learderboardController.getHome);
router.get('/away', learderboardController.getAway);

export default router;