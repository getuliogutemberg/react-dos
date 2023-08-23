import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../features/user/userSlice'
const Navbar = () => {
  const dispatch = useDispatch()  
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="Nav-bar">
     

        <div className='Nav-item' onClick={() => navigate('/')} style={location.pathname==='/'?{backgroundColor:'green',color:'white',textTransform:'uppercase'}:{}}>Home</div>
        <div className='Nav-caution' onClick={() => dispatch(logout())} style={{cursor:'no-drop'}} >Sair</div>

        <div className='Nav-option' onClick={() => navigate('/options')} style={location.pathname==='/options'?{backgroundColor:'green',color:'white',textTransform:'uppercase'}:{}} >Opções</div>

      
    </nav>
  )
}

export default Navbar