import React from 'react'
import {useNavigate} from 'react-router-dom'
import SectionCard  from '../components/SectionCard'
import RegisterForm from '../components/RegisterForm'
const Register = () => {
  const navigate = useNavigate()
  
  return (
    <SectionCard title='Registro' >

     <RegisterForm/>

     <button onClick={() => navigate('/login')} style={{margin:'1vmin',backgroundColor:'#000',color:'white',border:'none',fontSize:'2vmin',cursor:'pointer',textTransform:'capitalize'}}>Voltar</button>
    </SectionCard >
  )
}

export default Register