import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


const ProtectedRoute = (props) => {
  const user = useSelector(state => state.user.isLoggedIn)
  if(user){
    return props.children
  }
  else{
    return <Redirect to="/signup"/>
  }
}

export default ProtectedRoute