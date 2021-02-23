import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const usercontroller = new UserController();

router.post("/users", usercontroller.create);

export { router };