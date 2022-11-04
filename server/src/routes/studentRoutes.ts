import { Router } from 'express';

import { pool } from '../main';

const studentRouter = Router();

studentRouter.get('/student', async (_, res) => {
  try {
    const students = await pool.query('SELECT * FROM Students');
    res.json(students?.rows ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

export default studentRouter;
