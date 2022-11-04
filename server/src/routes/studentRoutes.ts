import { Router } from 'express';

import { pool } from '../main';

import type { Student } from '../../../typings/studentTypes';
import type { Language } from '../../../typings/languageTypes';
import type { Technology } from '../../../typings/technologyTypes';

const studentRouter = Router();

studentRouter.get('/student', async (_, res) => {
  try {
    const students = await pool.query('SELECT * FROM Students');
    const fetchedLanguages = await pool.query('SELECT * FROM Languages');
    const fetchedTechnologies = await pool.query('SELECT * FROM Technologies');
    if (!students?.rows) res.send([]);
    
    res.send(
      (students.rows as Student[]).map(({ languages, technologies, ...restProperties }) => ({
        ...restProperties,
        languages: fetchedLanguages?.rows && languages ? (fetchedLanguages.rows as Language[]).filter(language => languages.split(',').includes(String(language.language_id))) : [],
        technologies: fetchedTechnologies?.rows && technologies ? (fetchedTechnologies.rows as Technology[]).filter(technology => technologies.split(',').includes(String(technology.technology_id))) : [],
      }))
    );
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

export default studentRouter;