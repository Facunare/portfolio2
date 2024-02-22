
import './App.css'
import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import './darkMode.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from '../components/Portfolio';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
  )
}

export default App


// arreglar twitke, ñetflix