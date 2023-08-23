import React from 'react'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="Nav-bar">
     
        {/* <div className='Nav-item' onClick={() => navigate('/login')}>Login</div> */}
        {/* <div className='Nav-item' onClick={() => navigate('/register')}>Register</div> */}
        <div className='Nav-item' onClick={() => navigate('/')}>Home</div>
        <div className='Nav-item' onClick={() => navigate('/login')} style={{cursor:'no-drop'}} >Sair</div>

        <div className='Nav-option' onClick={() => navigate('/options')} style={{cursor:'help'}} >Opções</div>

      
    </nav>
  )
}

export default Navbar