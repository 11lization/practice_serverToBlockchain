import express from 'express';
import hello from './hello.js';

const rootRouter = express.Router();

rootRouter.use('/hello', hello);

export default rootRouter;