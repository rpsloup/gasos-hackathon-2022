CREATE TABLE Students(
  student_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(96) NOT NULL,
  locality VARCHAR(96) NOT NULL,
  school VARCHAR(64) NOT NULL,
  end_year INT NOT NULL,
  languages VARCHAR(128),
  technologies VARCHAR(128),
  gdpr BOOLEAN
);
