import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';  // Remove the curly braces - default import
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectDetail from './components/Projects/ProjectDetail';

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/projects/:id"
            element={isAuthenticated() ? <ProjectDetail /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;