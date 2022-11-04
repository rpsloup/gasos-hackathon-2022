import { Router } from 'express';

import { pool } from '../main';

import type { Language } from '../../../typings/languageTypes';

const languageRouter = Router();

languageRouter.get('/language', async (_, res) => {
  try {
    const languages = await pool.query('SELECT * FROM Languages');
    res.json(languages?.rows as Language[] ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

export default languageRouter;
