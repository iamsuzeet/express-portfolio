import * as express from 'express';
import provinceController from './province.controller';

const provinceRouter = express.Router();

const { getAllProvince, getProvinceById } = provinceController;

provinceRouter.get('/', getAllProvince);
provinceRouter.get('/:id', getProvinceById);

export default provinceRouter;
