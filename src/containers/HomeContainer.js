import React from 'react'
import { useDispatch} from 'react-redux'
import { userAction } from '../store/user-slice'

function HomeContainer() {
    const user = JSON.parse(localStorage.getItem("user"))
    const profilePicture = localStorage.getItem("profilePicture")
    console.log(user)
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(userAction.logout())
        
    }
   
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'>
                <img src={profilePicture} alt={user.name} className='profilePicture'/>
            </div>
            <div className='col-6'>
                <div className='row'>
                    <label>Name</label>
                    <h3>{user.name}</h3>
                </div>
                <div className='row'>
                    <label>Phone</label>
                    <h3>{user.phone}</h3>
                </div>
                <div className='row'>
                    <label>Email</label>
                    <h3>{user.email}</h3>
                </div>
                <button className='btn btn-danger my-2' onClick={handleLogout}>Logout</button>
            </div>
            
        </div>
    </div>
  )
}

export default HomeContainer