import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AdminEmailPage from './pages/admin/AdminEmailPage';
import AdminImportPage from './pages/admin/AdminImportPage';
import AdminExportPage from './pages/admin/AdminExportPage';
import AdminSheetsPage from './pages/admin/AdminSheetsPage';
import LoginPage from './pages/LoginPage';

const App = () =>
  (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/email" element={<AdminEmailPage />} />
      <Route path="/admin/import" element={<AdminImportPage />} />
      <Route path="/admin/export" element={<AdminExportPage />} />
      <Route path="/admin/sheets" element={<AdminSheetsPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );

export default App;
