import {
  IExpressRequest,
  IExpressResponse,
  IExpressNextFunction,
} from 'src/types/express';
import { JSONResponse } from '../../utils/JSONResponse';
import userService from './user.service';

class UserController {
  async getAllUser(
    req: IExpressRequest,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) {
    try {
      const users = await userService.getAllUser();
      JSONResponse.success({
        req,
        res,
        message: 'User Fetched Successfully',
        data: users,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
