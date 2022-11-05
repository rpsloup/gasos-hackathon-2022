import { useState, useEffect, useRef } from 'react';
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
  const [currentStudent, setCurrentStudent] = useState(null);
  const newStudentNameRef = useRef(null);
  const newEmailRef = useRef(null);
  const newLocalityRef = useRef(null);
  const newSchoolRef = useRef(null);
  const newEndYearRef = useRef(null);
  const navigate = useNavigate();

  const handleOpenEdit = student => {
    setEditDialogShown(true);
    setCurrentStudent(student);
  }

  const handleEdit = () => {
    if (
      !newStudentNameRef?.current?.value ||
      !newEmailRef.current?.value ||
      !newLocalityRef.current?.value ||
      !newSchoolRef.current?.value ||
      !newEndYearRef.current?.value
    ) return;

    fetch('http://192.168.43.201:3001/student', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        student_id: currentStudent.student_id,
        name: `${newStudentNameRef.current.value}`,
        email: newEmailRef.current.value,
        locality: newLocalityRef.current.value,
        school: newSchoolRef.current.value,
        end_year: newEndYearRef.current.value,
        languages: '1,2,3',
        technologies: '3,1',
        gdpr: true,
      })
    });
    window.location.reload();
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
      <Dialog
        title="Úprava záznamu studenta"
        closeHandler={() => {
          setEditDialogShown(false);
          setCurrentStudent(null);
        }}
        shown={editDialogShown}
        confirmHandler={() => handleEdit()}
      >
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="name">Jméno</label>
          <input type="text" name="name" ref={newStudentNameRef} defaultValue={currentStudent?.name ?? ''} />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" ref={newEmailRef} defaultValue={currentStudent?.email ?? ''} />
          <label htmlFor="locality">Bydliště</label>
          <input type="text" name="locality" ref={newLocalityRef} defaultValue={currentStudent?.locality ?? ''} />
          <label htmlFor="school">Škola</label>
          <input type="text" name="school" ref={newSchoolRef} defaultValue={currentStudent?.school ?? ''} />
          <label htmlFor="endyear">Ukončení studia</label>
          <input type="text" name="endyear" ref={newEndYearRef} defaultValue={currentStudent?.end_year ?? ''} />
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
              <StudentBox key={student.student_id} student={student} editHandler={handleOpenEdit} />
            )
          ) : null}
        </Collection>
      </ContentWrapper>
    </>
  );
}

export default AdminPage;
