import { Button } from '@mui/material'
import React from 'react'

const Home = ({handleUser}) => {
  const handleLogout = () => {
    localStorage.removeItem('user')
    handleUser(null)
  }

  return (
    <>
    <div>Welcome to the application.</div>
    <Button onClick={handleLogout}>
      Logout
    </Button>
    </>
  )
}

export default Home
