import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'

const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const enter = () => {
    if (username === 'Joao' && password === 'admin') {
      dispatch(login())
      navigate('/')
      
    }
    else{
      alert('usuario ou senha incorretos')
    }
  }
  return (
    <div className="Login-card" style={{display:'flex',flexDirection:'column'}}>
        
    <form onSubmit={() => enter()} className='Login-form' style={{display:'flex',flexDirection:'column',fontSize:'2vmin'}}>
      <input type="text" placeholder='username' style={{margin:'1vmin',height:'5vmin'}} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder='password' style={{margin:'1vmin',height:'5vmin'}} onChange={(e) => setPassword(e.target.value)}/>
      <button type='submit' className='Login-button' >entrar</button>
    </form>
  </div>
  )
}

export default LoginForm