import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from './supabaseClient'; // Import Supabase

const App = () => {
  console.log("Supabase client:", supabase); // Debugging log

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login as the default page */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
