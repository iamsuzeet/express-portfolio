import * as express from 'express';
import userController from './user.controller';

const userRouter = express.Router();

userRouter.get('/', userController.getAllUser);

export default userRouter;
