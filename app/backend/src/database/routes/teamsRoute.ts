import { Router } from "express";
import teamsController from "../controllers/teamController";
import TeamController from '../controllers/teamController';

const router = Router();
const teamController = new TeamController();

router.get('/', teamController.teams);
router.get('/:id', teamController.teamById);

export default router;