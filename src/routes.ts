import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const usercontroller = new UserController();
const surveyscontroller = new SurveysController();

router.post("/users", usercontroller.create);
router.post("/surveys", surveyscontroller.create);
router.get("/surveys", surveyscontroller.show);

export { router };