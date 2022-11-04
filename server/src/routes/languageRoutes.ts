import { Router } from 'express';

import { pool } from '../main';

const languageRouter = Router();

languageRouter.get('/language', async (_, res) => {
  try {
    const languages = await pool.query('SELECT * FROM Languages');
    res.json(languages?.rows ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

export default languageRouter;
