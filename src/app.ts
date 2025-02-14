import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { student_router } from './module/student/student.router';
import { user_router } from './module/user/user.router';
import globalErrorHandler from './middlwear/GlobalErrorHandler';
import notFound from './middlwear/notFound';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//routers
app.use('/api/v1/student', student_router);
app.use('/api/v1/user', user_router);

app.get('/', (req: Request, res: Response) => {
  res.send('PH University');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
