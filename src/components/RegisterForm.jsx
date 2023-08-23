import React from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

const RegisterForm = () => {
  const [username, setUsername] = React.useState()
  const [password, setPassword] = React.useState()
  const [passwordconfirm, setPasswordConfirm] = React.useState()

    const navigate = useNavigate()
  const register = () => {
    if(password=== undefined || passwordconfirm === undefined || username === undefined){
      alert('Preencha os campos')

    }
    if(password !== passwordconfirm){
      alert('As senhas não são iguais')

    }
    if ( password === passwordconfirm) {
      // registrar usuario no db
      // axios.post('http://localhost:3001/register', {
      //   username,
      //   password
      // }).then(response => console.log(response.data))
      // alert('Registro efetuado com sucesso!')
      navigate('/login')
    }
    
  }
  return (
    <div className="Login-card" style={{display:'flex',flexDirection:'column'}}>
        
    <form onSubmit={()=>register()} className='Login-form' style={{display:'flex',flexDirection:'column',fontSize:'2vmin'}}>
      <input type="text" placeholder='username' style={{margin:'1vmin',height:'5vmin'}} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder='password' style={{margin:'1vmin',height:'5vmin'}} onChange={(e) => setPassword(e.target.value)}/>
      <input type="password" placeholder='confirm password' style={{margin:'1vmin',height:'5vmin'}} onChange={(e) => setPasswordConfirm(e.target.value)}/>
      <button className='Login-button' type='submit' >Salvar</button>
    </form>
  </div>
  )
}

export default RegisterForm