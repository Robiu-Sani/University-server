import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlwear/GlobalErrorHandler';
import notFound from './middlwear/notFound';
import router from './routers';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//routers
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('PH University');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
