import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import '../App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(<Home />) as React.ReactNode} />
      </Routes>
    </Router>
  );
}

export default App;
