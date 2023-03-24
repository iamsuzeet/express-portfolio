import * as express from 'express';
import provinceRouter from '../core/province/province.routes';
import userRouter from '../core/users/user.routes';
import authRoutes from './../core/auth/auth.routes';

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/province', provinceRouter);
router.use('/users', userRouter);

export default router;
