import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const navigate = useNavigate()
  const register = () => {
    navigate('/login')
    alert('Registro efetuado com sucesso!')
  }
  return (
    <div className="Login-card" style={{display:'flex',flexDirection:'column'}}>
        
    <div className='Login-form' style={{display:'flex',flexDirection:'column',fontSize:'2vmin'}}>
      <input type="text" placeholder='username' style={{margin:'1vmin',height:'5vmin'}}/>
      <input type="password" placeholder='password' style={{margin:'1vmin',height:'5vmin'}}/>
      <input type="password" placeholder='confirm password' style={{margin:'1vmin',height:'5vmin'}}/>
      <button onClick = {()=>register()} style={{margin:'1vmin',backgroundColor:'#29b424',color:'white',border:'none',fontSize:'2.5vmin',cursor:'pointer',textTransform:'uppercase'}}>Salvar</button>
    </div>
  </div>
  )
}

export default RegisterForm