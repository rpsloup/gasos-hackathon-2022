import { Router } from 'express';

import { pool } from '../main';

import type { Technology } from '../../../typings/technologyTypes';

const technologyRouter = Router();

technologyRouter.get('/technology', async (_, res) => {
  try {
    const technologies = await pool.query('SELECT * FROM Technologies');
    res.json(technologies?.rows as Technology[] ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

export default technologyRouter;
