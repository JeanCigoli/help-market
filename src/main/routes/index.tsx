import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../../presentation/pages';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Main />} />
  </Routes>
);

export default Router;
