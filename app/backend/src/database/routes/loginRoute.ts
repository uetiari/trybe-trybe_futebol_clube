import { Router } from "express";
import UserController from '../controllers/userController';
import { validEmail, validPassword } from '../middlewares/validLogin';

const router = Router();
const userController = new UserController();

router.post('/', validEmail, validPassword, userController.login);
router.get('/validate', userController.loginValidate);

export default router;