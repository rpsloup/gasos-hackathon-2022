import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import nodemailer from 'nodemailer';

import studentRouter from './routes/studentRoutes';
import languageRouter from './routes/languageRoutes';
import technologyRouter from './routes/technologyRoutes';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
export const pool = new Pool({
  host: process.env.DB_HOST ?? '',
  user: process.env.DB_USER ?? '',
  password: process.env.DB_pASS ?? '',
  database: process.env.DB_NAME ?? '',
  port: Number(process.env.DB_PORT) ?? '',
});

const DEFAULT_PORT: number = 3001;
const port = process.env.port || DEFAULT_PORT;

app.get('/', (_, res) => res.json('BE funguje.'));

app.use(studentRouter);
app.use(languageRouter);
app.use(technologyRouter);

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER ?? '',
    pass: process.env.MAIL_PASS ?? '',
  },
});

const mailOptions = {
  from: process.env.MAIL_USER ?? '',
  to: 'robin.patrik.sloup@proton.me',
  subject: 'Sussy!',
  text: 'Yup, this is sussy.',
};

app.get('/mail/all', (req, res) => {
  mailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(port, () => {
  console.log(`[Start] Listening on port ${port}...`);
});
