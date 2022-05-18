import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const isAuth = true;
const user = {activated: false}

const ProtectedRoute = ({location}) => {
    return (
        !isAuth ? <Navigate to={{pathname: '/', state: {from: location}}} /> :  isAuth && !user.activated ? <Navigate to={{pathname: '/activate', state: {from: location}}} /> :  <Outlet/> 
      )
}

export default ProtectedRoute