// src/Login.js
import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import AuthForm from '../component/AuthForm';
import { Link, useNavigate } from 'react-router-dom';
import { handleLoginService } from '../utils/auth.service';

const Login = ({user, handleUser}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await handleLoginService(data);
      handleUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {errorMessage && <Typography>
          {errorMessage}
        </Typography>}
        <AuthForm onSubmit={handleLogin} isSignUp={false} />
        <Box>
          <Typography>Don't have an account? </Typography>
          <Link to={'/signup'}>Signup</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
