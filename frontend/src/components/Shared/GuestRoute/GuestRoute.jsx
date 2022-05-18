import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// const isAuth = false;

const GuestRoute = ({location}) => {

  const {isAuth} = useSelector((state)=>state.auth)

  return (
    isAuth ? <Navigate to={{pathname: '/rooms', state: {from: location}}} /> :  <Outlet/> 
  )
}

export default GuestRoute