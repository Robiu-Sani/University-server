import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { student_router } from './module/student/student.router';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//routers
app.use('/api/v1/student', student_router);

app.get('/', (req: Request, res: Response) => {
  res.send('PH University');
});

export default app;
