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
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>

      {/* Conditional rendering: Login/Signup or Sign Out */}
      {user ? (
        <button 
          onClick={handleSignOut} 
          style={{ background: 'none', border: 'none', color: 'purple', cursor: 'pointer' }}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login">Login/Signup</Link>
      )}
    </nav>
  );
};

export default Navbar;
