import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


const CommanRoute = (props) => {
  const user = useSelector(state => state.user.isLoggedIn)
  if(user){
      return <Redirect to="/home"/>
    }
    else{
      return props.children
  }
}

export default CommanRoute