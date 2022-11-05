import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageNavigation from '../components/PageNavigation';
import ContentWrapper from '../components/ContentWrapper';
import Loader from '../components/Loader';

import '../styles/reset.scss';
import '../styles/main.scss';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [studentsLoading, setStudentsLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.43.201:3001/student')
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setStudentsLoading(false);
      });
  }, []);

  return (
    <>
      <PageNavigation />
      <ContentWrapper>
        <h1>Administrace</h1>
        <ul>
          <li><Link to="/admin/email">Zaslat emaily</Link></li>
        </ul>
        <h2>Studenti</h2>
        {studentsLoading ? <Loader /> : null}
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
      </ContentWrapper>
    </>
  );
}

export default AdminPage;
