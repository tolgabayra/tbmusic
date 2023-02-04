import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();


const a = 1;




app.listen(5000, () => {
  console.log(`⚡️[Server]: Server is running at http://localhost:${5000}`);
});