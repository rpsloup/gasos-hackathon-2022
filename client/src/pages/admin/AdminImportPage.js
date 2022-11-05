import { useState, useEffect } from 'react';

import PageNavigation from '../../components/PageNavigation';
import ContentWrapper from '../../components/ContentWrapper';

const AdminImportPage = () => {
  const [studentData, setStudentData] = useState([]);

  const handleFileImport = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = e => {
      setStudentData(JSON.parse(e.target.result));
    }
  }

  useEffect(() => {
    studentData.forEach(student => {
      fetch('http://192.168.43.201:3001/student', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: student.name,
          email: student.email,
          locality: student.locality,
          school: student.school,
          end_year: student.end_year,
          languages: student.languages,
          technologies: student.technologies,
          gdpr: student.gdpr,
        }),
      });
    });
  }, [studentData]);

  return (
    <>
        <PageNavigation />
        <ContentWrapper>
          <h1>Importovat data</h1>
          <input type="file" accept=".json" onChange={e => handleFileImport(e)} />
        </ContentWrapper>
    </>
  );
}

export default AdminImportPage;
