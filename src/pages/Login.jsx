import React from 'react'
import {useNavigate} from 'react-router-dom'
import SectionCard  from '../components/SectionCard'
import LoginForm from '../components/LoginForm'
const Login = () => {
  const navigate = useNavigate()
  
  return (


    <SectionCard title='Login' >

     <LoginForm/>

     <button onClick={() => navigate('/register')} style={{margin:'1vmin',backgroundColor:'#000',color:'white',border:'none',fontSize:'2vmin',cursor:'pointer',textTransform:'capitalize'}}>Registrar</button>
    </SectionCard >

 
  )
}

export default Login