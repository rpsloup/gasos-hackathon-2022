import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AdminEmailPage from './pages/admin/AdminEmailPage';
import LoginPage from './pages/LoginPage';

const App = () =>
  (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/email" element={<AdminEmailPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );

export default App;
