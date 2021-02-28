import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const usercontroller = new UserController();
const surveyscontroller = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", usercontroller.create);
router.post("/surveys", surveyscontroller.create);
router.get("/surveys", surveyscontroller.show);

router.post("/sendMail", sendMailController.execute);
router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute);

export { router };