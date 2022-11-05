import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PageNavigation from '../components/PageNavigation';
import Dialog from '../components/Dialog';
import ContentWrapper from '../components/ContentWrapper';
import Collection from '../components/Collection';
import Card from '../components/Card';
import Icon from '../components/Icon';
import Loader from '../components/Loader';
import StudentBox from '../components/StudentBox';

import '../styles/reset.scss';
import '../styles/main.scss';
import '../styles/admin.scss';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [studentsLoading, setStudentsLoading] = useState(true);
  const [editDialogShown, setEditDialogShown] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => {
    setEditDialogShown(true);
  }

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
      <Dialog title="Úprava záznamu studenta" closeHandler={() => setEditDialogShown(false)} shown={editDialogShown}>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" name="name" />
          <input type="text" name="locality" />
          <input type="text" name="school" />
          <input type="text" name="endyear" />
        </form>
      </Dialog>
      <PageNavigation />
      <ContentWrapper>
        <Collection columnSize="18rem">
          <Card icon={<Icon name="paper-plane" type="fas" />} text="Rozeslat emaily" handler={() => navigate('/admin/email')} />
          <Card icon={<Icon name="file-import" type="fas" />} text="Import studentů" handler={() => navigate('/admin/import')} />
          <Card icon={<Icon name="file-export" type="fas" />} text="Export studentů" handler={() => navigate('/admin/export')} />
          <Card icon={<Icon name="file-excel" type="fas" />} text="Import z Google Sheets" handler={() => navigate('/admin/sheets')} />
          <Card icon={<Icon name="magnifying-glass" type="fas" />} text="Hledání studentů" handler={() => navigate('/admin/search')} />
        </Collection>
        {studentsLoading ? <Loader /> : null}
        <Collection>
          {students && students.length > 0 ? students.map(
            student => (
              <StudentBox key={student.student_id} student={student} editHandler={handleEdit} />
            )
          ) : null}
        </Collection>
      </ContentWrapper>
    </>
  );
}

export default AdminPage;
