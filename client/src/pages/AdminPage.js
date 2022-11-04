import { useState, useEffect } from 'react';

import '../styles/reset.scss';

const AdminPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://192.168.43.201:3001/student')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <>
      <h1>Administrace</h1>
      <h2>Studenti</h2>
      {students && students.length > 0 ? students.map(
        student => (
          <div key={student.student_id}>
            <h3>{student.name}</h3>
            <p>Lokalita: {student.locality}</p>
            <p>Škola: {student.school}</p>
            <p>Rok ukočení studia: {student.end_year}</p>
            <p>Souhlasil(a) s GDPR: {student.gdpr ? 'Ano' : 'Ne'}</p>
            <h3>Programovací jazyky</h3>
            <ul>
              {student.languages.map(language => (
                <li key={language.language_id}>{language.name}</li>
              ))}
            </ul>
            <h3>Technologie</h3>
            <ul>
              {student.technologies.map(technology => (
                <li key={technology.technology_id}>{technology.name}</li>
              ))}
            </ul>
          </div>
        )
      ) : null}
    </>
  );
}

export default AdminPage;
