import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// const isAuth = true;
// const user = {activated: false}

const SemiProtectedRoute = ({location}) => {

  const {user, isAuth} = useSelector((state)=>state.auth)

    return (
        !isAuth ? <Navigate to={{pathname: '/', state: {from: location}}} /> :  isAuth && !user.activated ?  <Outlet/> : <Navigate to={{pathname: '/rooms', state: {from: location}}} /> 
      )
}

export default SemiProtectedRoute