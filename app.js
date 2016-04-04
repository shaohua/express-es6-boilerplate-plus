import express from 'express';
import setErrorHandlers from './utils/error-handlers';
import setMiddlewares from './middlewares/index';
import setRoutes from './routes/index';
import setServices from './services/index';

const app = express();

// Order matters
setServices(app);
setMiddlewares(app);
setRoutes(app);
setErrorHandlers(app);

export default app;
