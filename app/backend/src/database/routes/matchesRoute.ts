import { Router } from "express";
import MatchController from "../controllers/matchController";
import tokenValidate from "../helpers/tokenValidate";
import { validMatch } from "../middlewares/validMatch";

const router = Router();
const matchesController = new MatchController();

router.get('/', matchesController.matches);
router.post('/', tokenValidate, validMatch, matchesController.create);
router.patch('/:id/finish', matchesController.update);

export default router;