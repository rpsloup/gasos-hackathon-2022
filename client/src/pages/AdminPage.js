import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PageNavigation from '../components/PageNavigation';
import ContentWrapper from '../components/ContentWrapper';
import Collection from '../components/Collection';
import Card from '../components/Card';
import Icon from '../components/Icon';
import Loader from '../components/Loader';
import StudentBox from '../components/StudentBox';

import '../styles/reset.scss';
import '../styles/main.scss';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [studentsLoading, setStudentsLoading] = useState(true);
  const navigate = useNavigate();

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
        <Collection columnSize="18rem">
          <Card icon={<Icon name="paper-plane" type="fas" />} text="Rozeslat emaily" handler={() => navigate('/admin/email')} />
          <Card icon={<Icon name="paper-plane" type="fas" />} text="Import studentů" handler={() => navigate('/admin/import')} />
          <Card icon={<Icon name="paper-plane" type="fas" />} text="Export studentů" handler={() => navigate('/admin/export')} />
        </Collection>
        <h2>Studenti</h2>
        {studentsLoading ? <Loader /> : null}
        <Collection>
          {students && students.length > 0 ? students.map(
            student => (
              <StudentBox key={student.student_id} student={student} />
            )
          ) : null}
        </Collection>
      </ContentWrapper>
    </>
  );
}

export default AdminPage;
