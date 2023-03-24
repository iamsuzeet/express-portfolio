import * as express from 'express';
import { db } from './model';
import router from './routes';
import {
  IError,
  IExpressNextFunction,
  IExpressRequest,
  IExpressResponse,
} from './types/express';
import { JSONResponse } from './utils/JSONResponse';
import NotFoundException from './exceptions/NotFoundException';

const app = express();

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize
  .authenticate()
  .then(() => {
    db.sequelize
      .sync()
      .then(() => {
        console.log('Synced db.');
      })
      .catch((err) => {
        console.log('Failed to sync db: ' + err.message);
      });
  })
  .catch((err) => {
    console.error("'Unable to connect to the database:', error");
  });

app.use(router);

app.use(
  (req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
    const err = new NotFoundException();
    next(err);
  }
);

app.use(
  (
    err: IError,
    req: IExpressRequest,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) => {
    err.success = false;
    err.status = err.status || 500;
    err.message = err.message || 'Something went wrong';
    err.data = err.data || err.stack || null;

    JSONResponse.failure({
      req,
      res,
      data: err.data,
      message: err.message,
      status: err.status,
    });
  }
);

app.listen(process.env.port, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
