import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from './components/LoginPage'; // import your login component
import SignUpPage from './components/SignUpPage'; // import your signup component
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MyAccount from './components/MyAccount';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/my-account" element={<MyAccount user={{firstName:"Ubaldo",lastName:"Flor"}}/>} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
