import { Router } from "express";
import MatchController from "../controllers/matchController";

const router = Router();
const matchesController = new MatchController();

router.get('/', matchesController.matches);

export default router;