import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const AuthForm = ({ onSubmit, isSignUp }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)()
      }}
      sx={{ mt: 1 }}
    >
      {isSignUp && (
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: 'Username is required' }}
          render={({field}) => (
            <TextField
              {...field}
              label="Username"
              fullWidth
              margin="normal"
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ''}
            />
          )}
        />
      )}
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address',
          },
        }}
        render={({field}) => (
          <TextField
            {...field}
            label="Email"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ 
          required: 'Password is required',
          pattern: {
            value: isSignUp && /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: `Password Must have\n
            - Minimum length of 8 characters
            - Contains at least 1 letter.
            - Contains at least 1 number.
            - Contains at least 1 special character.
            `
          }
          }}
        render={({field}) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        {isSignUp ? 'Sign Up' : 'Login'}
      </Button>
    </Box>
  );
};

export default AuthForm;
