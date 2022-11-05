import { useState, useEffect } from 'react';

import PageNavigation from '../../components/PageNavigation';
import ContentWrapper from '../../components/ContentWrapper';
import Loader from '../../components/Loader';

const AdminExportPage = () => {
  const [students, setStudents] = useState([]);
  const [studentsLoading, setStudentsLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.43.201:3001/student_raw')
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setStudentsLoading(false);
      });
  }, []);

  const handleExportData = () => {
    const jsonString = `data:text/json; charset=utf-8, ${encodeURIComponent(
      JSON.stringify(students)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'students.json';
    link.click();
  }

  return (
    <>
      <PageNavigation />
      <ContentWrapper>
        <h1>Exportovat data</h1>
        {studentsLoading ? <Loader /> : <button onClick={handleExportData}>Exportovat</button>}
      </ContentWrapper>
    </>
  );
}

export default AdminExportPage;
