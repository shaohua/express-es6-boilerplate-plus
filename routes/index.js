import home from './home';
import users from './users';

export default function setRoutes(app) {
  app.use('/', home);
  app.use('/users', users);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
}
