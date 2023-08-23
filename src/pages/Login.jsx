import React from 'react'
import {useNavigate} from 'react-router-dom'
import SectionCard  from '../components/SectionCard'
import LoginForm from '../components/LoginForm'
import InfoBar from '../components/InfoBar'
const Login = () => {
  const navigate = useNavigate()
  
  return (<>
    {true && <InfoBar title={'Acesso'}/>}
    <SectionCard title='Login' >
      

     <LoginForm/>

     <button onClick={() => navigate('/register')} style={{margin:'1vmin',backgroundColor:'black',color:'white',border:'none',fontSize:'2vmin',cursor:'pointer',textTransform:'capitalize'}}>Registrar</button>
    </SectionCard >

    </>
  )
}

export default Login