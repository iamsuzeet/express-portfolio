import * as express from 'express';
import { join } from 'path';

const app = express();

const PORT = process.env.PORT;

// An example middleware function
const a_middleware_function = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.send('inside middleware function');
  // Perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
};

app.use('/middleware', a_middleware_function);

app.use(
  '/users/:id',
  (req, res, next) => {
    console.log(`inside first next function, ${req.params.id}`);
    if (req.params.id === 'sujit') next('route');
    else next();
  },
  (req, res, next) => {
    console.log(`inside second next function, ${req.method}`);
    next();
  }
);

app.use('/assets', express.static(join(__dirname, 'public')));

app.get('/users/:id', (req, res) => {
  res.json({ userId: req.params.id });
});

app
  .get('/users/:userId/books/:bookId', (req, res, next) => {
    console.log('inside first callback');

    // res.json({
    //   ...req.params,
    // });
    next();
  })
  .get('/users/:userId/books/:bookId', (req, res, next) => {
    res.json({
      ...req.params,
      next: true,
    });
    // next();
  })
  .get('/users/test/:id', (req, res) => {
    res.json({
      testId: req.params.id,
    });
  });

app.get('/', (req, res) => {
  res.send('express intalled');
});

app.post('/user', (req, res) => {
  console.log(req);
});

// app
//   .route('/')
// app.use('*', (req, res) => {
//   res.status(404).send('Route not found');
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`Server started at localhost:${PORT}`));
