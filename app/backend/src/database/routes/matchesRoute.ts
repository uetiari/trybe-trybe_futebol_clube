import { Router } from "express";
import MatchController from "../controllers/matchController";
import tokenValidate from "../helpers/tokenValidate";

const router = Router();
const matchesController = new MatchController();

router.get('/', matchesController.matches);
router.post('/', tokenValidate, matchesController.create);
router.patch('/:id/finish', matchesController.update);

export default router;