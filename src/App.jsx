import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Onboarding from './pages/Onboarding/Onboarding';
import ReviewQueue from './pages/ReviewQueue/ReviewQueue';
import Login from './pages/Login/Login';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="applications" element={<ReviewQueue />} />
          <Route path="dsa-directory" element={<div style={{ padding: '2rem' }}><h2>DSA Directory (Coming Soon)</h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
