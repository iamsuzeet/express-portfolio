import {
  IExpressRequest,
  IExpressResponse,
  IExpressNextFunction,
  MiddlewareType,
} from 'src/types/express';
import provinceService from './province.service';
import { JSONResponse } from './../../utils/JSONResponse';

// type Range = Parameters<MiddlewareType>;
class ProvinceController {
  async getAllProvince(
    req: IExpressRequest,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) {
    try {
      const province = await provinceService.getAllProvince();
      return JSONResponse.success({
        req,
        res,
        data: province,
        message: 'Province Fetched Successfully',
      });
    } catch (err) {
      next(err);
    }
  }

  async getProvinceById(
    req: IExpressRequest,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) {
    try {
      const province = await provinceService.getProvinceById(req.params.id);
      return JSONResponse.success({
        req,
        res,
        data: province,
        message: 'Province Fetched Successfully',
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new ProvinceController();
