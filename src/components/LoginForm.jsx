import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()
  const enter = () => {
    navigate('/')
  }
  return (
    <div className="Login-card" style={{display:'flex',flexDirection:'column'}}>
        
    <div className='Login-form' style={{display:'flex',flexDirection:'column',fontSize:'2vmin'}}>
      <input type="text" placeholder='username' style={{margin:'1vmin',height:'5vmin'}}/>
      <input type="password" placeholder='password' style={{margin:'1vmin',height:'5vmin'}}/>
      <button onClick = {enter} style={{margin:'1vmin',backgroundColor:'#29b424',color:'white',border:'none',fontSize:'2.5vmin',cursor:'pointer',textTransform:'uppercase'}}>entrar</button>
    </div>
  </div>
  )
}

export default LoginForm