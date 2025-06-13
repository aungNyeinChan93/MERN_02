import { Router } from "express";
import workoutController from "../controllers/workoutController.js";

const workoutRouter = Router();

workoutRouter.get('/', workoutController.getAll);
workoutRouter.post('/', workoutController.create);
workoutRouter.get('/:id', workoutController.getWorkout);
workoutRouter.put('/:id', workoutController.modify);
workoutRouter.delete('/:id', workoutController.drop);

export default workoutRouter;