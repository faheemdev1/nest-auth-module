import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import AuthForm from '../component/AuthForm';
import { Link, useNavigate } from 'react-router-dom';
import { handleSignupService } from '../utils/auth.service';

const SignUp = ({user,handleUser}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  const handleSignUp = async (data) => {
    try {
      const response = await handleSignupService(data);
      handleUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/')
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
          Sign Up
        </Typography>
        {errorMessage && <Typography>
          {errorMessage}
        </Typography>}
        <AuthForm onSubmit={handleSignUp} isSignUp={true} />
        <Box>
          <Typography>Already have an account? </Typography>
          <Link to={'/login'}>Login</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
