import { useState, useEffect, useRef } from 'react';

import PageNavigation from '../../components/PageNavigation';
import ContentWrapper from '../../components/ContentWrapper';
import Loader from '../../components/Loader';
import Collection from '../../components/Collection';
import StudentBox from '../../components/StudentBox';

const AdminSearchPage = () => {
  const [students, setStudents] = useState([]);
  const [studentsLoading, setStudentsLoading] = useState(true);
  const endYearRef = useRef(null);

  const searchByYear = (e) => {
    e.preventDefault();
    if (!endYearRef.current) return;

    setStudentsLoading(true);
    fetch(`http://192.168.43.201:3001/student?year=${endYearRef.current.value}`)
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setStudentsLoading(false);
      });
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
      <PageNavigation />
      <ContentWrapper>
        <h1>Hledání studentů</h1>
        <h2>Hledat podle roku ukončení studia</h2>
        <form onSubmit={e => searchByYear(e)}>
          <input type="number" ref={endYearRef} required />
          <button>Hledat</button>
        </form>
        {!studentsLoading ? <Collection>
          {students && students.length > 0 ? students.map(
            student => (
              <StudentBox key={student.student_id} student={student} />
            )
          ) : null}
        </Collection> : <Loader />}
      </ContentWrapper>
    </>
  );
}

export default AdminSearchPage;
