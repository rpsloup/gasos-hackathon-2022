import { Router } from 'express';

import { pool } from '../main';

import type { Student } from '../../../typings/studentTypes';
import type { Language } from '../../../typings/languageTypes';
import type { Technology } from '../../../typings/technologyTypes';

const studentRouter = Router();

studentRouter.get('/student', async (req, res) => {
  try {
    const { year } = req.query;

    const students = await pool.query(`SELECT * FROM Students ${year ? `WHERE end_year = ${year}` : ''}`);
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

studentRouter.get('/student_raw', async (_, res) => {
  try {
    const students = await pool.query('SELECT * FROM Students');
    res.json(students?.rows as Technology[] ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

studentRouter.post('/student', async (req, res) => {
  try {
    const {
      name,
      email,
      locality,
      school,
      end_year,
      languages,
      technologies,
      gdpr,
    } = req.body;
    console.log(req.body);

    const newStudent = await pool.query('INSERT INTO Students (name, email, locality, school, end_year, languages, technologies, gdpr) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [
      name,
      email,
      locality,
      school,
      end_year,
      languages,
      technologies,
      gdpr,
    ]);
    res.json(newStudent?.rows[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

studentRouter.delete('/student', async (req, res) => {
  try {
    const { id } = req.body;
    const deletedStudent = await pool.query('DELETE FROM Students WHERE student_id = $1 RETURNING *', [id]);
    res.json(deletedStudent?.rows[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

export default studentRouter;
