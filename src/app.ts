import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';
import userRoutes from './routes/user.routes';

const app: Application = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/users', userRoutes);

app.get('/', (_req, res) => {
  res.json({ message: 'Server is running' });
});

export default app;