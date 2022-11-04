DROP TABLE IF EXISTS Students;
DROP TABLE IF EXISTS Languages;
DROP TABLE IF EXISTS Technologies;

CREATE TABLE Students(
  student_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(96) NOT NULL,
  locality VARCHAR(96) NOT NULL,
  school VARCHAR(64) NOT NULL,
  end_year INT NOT NULL,
  languages VARCHAR(128) NOT NULL,
  technologies VARCHAR(128),
  gdpr BOOLEAN
);

CREATE TABLE Languages(
  language_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(64)
);

CREATE TABLE Technologies(
  technology_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(64)
);
