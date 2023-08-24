import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./pages/Login";
import Register from './pages/Register';
import Painel from './pages/Painel';
import Footer from './components/Footer';
import AppBar from './components/AppBar';
import Options from './pages/Options';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Systems from './pages/Systems';
import Monitoring from './pages/Monitoring';



function App() {

  const isLogged = useSelector((state) => state.user.isLogged)

  const protectrouter = (Component) => {
    if (!isLogged) {
      return <Login />
    }
    return Component
  }
  
  return (
    <div className="App">
      {false && <AppBar/> }
      <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/options" element={protectrouter(<Options/>)} />
      <Route exact path="/" element={protectrouter(<Painel/>)} />
      <Route exact path="/systems/:id" element={protectrouter(<Systems/>)} />
      <Route exact path="/monitoring/:id" element={protectrouter(<Monitoring/>)} />

      </Routes>
      {false && <Footer/>}
     
        
     
    </BrowserRouter>

    </div>
  );
}

export default App;
