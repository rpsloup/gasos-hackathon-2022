import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageNavigation from '../components/PageNavigation';
import ContentWrapper from '../components/ContentWrapper';
import Loader from '../components/Loader';
import StudentRow from '../components/StudentRow';

import '../styles/reset.scss';
import '../styles/main.scss';
import '../styles/admin.scss';

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
        <div className="students-header">
          <p><b>Jméno</b></p>
          <p><b>Lokalita</b></p>
          <p><b>Škola</b></p>
          <p><b>Rok ukončení studia</b></p>
        </div>
        {studentsLoading ? <Loader /> : null}
        {students && students.length > 0 ? students.map(
          student => (
            <StudentRow key={student.student_id} student={student} />
          )
        ) : null}
      </ContentWrapper>
    </>
  );
}

export default AdminPage;
