import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Home from './pages/Home';

const App = () => {
  const [user, setUser] = useState(null);

  const handleUser = (data) => {
    setUser(data)
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login user={user} handleUser={handleUser}/>} />
        <Route path="/signup" element={<SignUp user={user} handleUser={handleUser}/>} />
        <Route path="/" element={user ? <Home handleUser={handleUser}/> : <Navigate to={'/login'} />} />
      </Routes>
    </Router>
  );
}

export default App;
