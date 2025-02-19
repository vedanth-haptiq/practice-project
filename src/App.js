import React from 'react';
import './App.css';
import Header from './components/Header/header.jsx';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login/login.jsx';
import Register from './components/Register/register.jsx';
import Counter from './components/Counter/counter.jsx';

const AppContent = () => {
  const location = useLocation(); 

  return (
    <div className="App">
      {location.pathname !== "/login" && location.pathname !== "/register" && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} /> 
      </Routes>
      <Counter />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
        

  );
}

export default App;
