const AdminEmailPage = () => {
  const handleSendMailToAll = () => {
    fetch('http://192.168.43.201:3001/mail/all');
  }

  return (
    <>
      <h1>Zasílání emailu</h1>
      <button onClick={handleSendMailToAll}>Zaslat email všem studentům</button>
    </>
  );
}

export default AdminEmailPage;
