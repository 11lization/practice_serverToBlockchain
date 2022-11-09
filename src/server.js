import express from 'express';
import rootRouter from './routers/index.js';
import cors from 'cors';

const server = async () => {
  const app = express();
  const port = 10801;

  app.use(cors(null));
  app.use('/', rootRouter);

  app.set('port',port);
  app.listen(port);
}

//이렇게 선언하고 나면 다른 파일에서 이 함수를 import할 수 있다.
export default server;