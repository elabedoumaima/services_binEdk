import React from 'react'
import './logout.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../redux/UserSlice';
function Logout() {

    const user = useSelector(selectUser)
    const dispatch=useDispatch();
    const handelLogout=(e)=>{
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <div className='logout'>
            <h1>Welcome <span className='user_name'>{user.nom}</span></h1>
            <button className='logout_button' onClick={()=>handelLogout(e)}>Logout</button>
        </div>

    )
}

export default Logout