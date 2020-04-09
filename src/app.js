import express, { json } from 'express';
import morgan from 'morgan';

//importing route
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//initialization
const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;