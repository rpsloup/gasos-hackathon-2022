import PageNavigation from '../../components/PageNavigation';
import ContentWrapper from '../../components/ContentWrapper';

const AdminImportPage = () => {
  const handleFileImport = e => {
    const fileContent = e.target.result;
    console.log(fileContent);
  }

  return (
    <>
        <PageNavigation />
        <ContentWrapper>
          <h1>Importovat data</h1>
          <input type="file" accept=".json" onChange={e => handleFileImport(e.target.files[0])} />
        </ContentWrapper>
    </>
  );
}

export default AdminImportPage;
