import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const ProtectedRoute = ({me, children}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if(!me) navigate('/login')
  }, [me])

  return children
};

export default ProtectedRoute;
