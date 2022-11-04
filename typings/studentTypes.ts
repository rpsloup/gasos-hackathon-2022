import type { Language } from './languageTypes';
import type { Technology } from './technologyTypes';

export type Student = {
  student_id: number;
  name: string;
  locality: string;
  end_year: number;
  gpdr: boolean;
  languages: string;
  technologies: string;
};

export type FetchedStudent = {
  student_id: number;
  name: string;
  locality: string;
  end_year: number;
  gpdr: boolean;
  languages: Language[];
  technologies: Technology[];
};
