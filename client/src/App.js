import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import './style.css';

const App = () =>
  (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );

export default App;
