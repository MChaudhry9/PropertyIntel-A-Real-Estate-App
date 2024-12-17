import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient'; // Import your Supabase client
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null); // State to track user
  const navigate = useNavigate();

  // Check user authentication state
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    checkUser();

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => listener.subscription.unsubscribe(); // Cleanup listener
  }, []);

  // Sign Out function
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/'); // Redirect to home page
  };

  return (
    <nav className="navbar">
      <Link to="/" className="home-link">Home</Link>
      {user && <Link to="/profile">Profile</Link>}
      <Link to="/contact">Contact</Link>
      {/* Link to complaint codes file */}
      <a 
        href="/complaint_codes.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="navbar-link"
      >
        Complaint Codes
      </a>

      {/* Link to disposition codes file */}
      <a 
        href="/disposition_codes.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="navbar-link"
      >
        Disposition Codes 
      </a>

      {/* Conditional rendering: Login/Signup or Sign Out */}
      {user ? (
        <span 
          onClick={handleSignOut} 
          className="navbar-link" /* Added class to match link styling */
          style={{ cursor: 'pointer' }}
        >
          Sign Out
        </span>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Try it for Free!</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
