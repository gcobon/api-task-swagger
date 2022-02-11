import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/task.routes';

// swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJS from 'swagger-jsdoc';
import { swaggerOptions } from './swaggerOptions';
const specs = swaggerJS(swaggerOptions);

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;
