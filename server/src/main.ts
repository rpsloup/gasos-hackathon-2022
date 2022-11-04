import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

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

app.get('/technology', async (_, res) => {
  try {
    const technologies = await pool.query('SELECT * FROM Technologies');
    res.json(technologies?.rows ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
})

app.listen(port, () => {
  console.log(`[Start] Listening on port ${port}...`);
});
