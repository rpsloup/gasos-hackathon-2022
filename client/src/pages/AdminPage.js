import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageNavigation from '../components/PageNavigation';
import ContentWrapper from '../components/ContentWrapper';
import Loader from '../components/Loader';
import StudentBox from '../components/StudentBox';

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
            <StudentBox key={student.student_id} student={student} />
          )
        ) : null}
      </ContentWrapper>
    </>
  );
}

export default AdminPage;
