import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./pages/Login";
import Register from './pages/Register';
import Home from './pages/Home';
import Footer from './components/Footer';
import AppBar from './components/AppBar';
import Options from './pages/Options';

function App() {
  return (
    <div className="App">
      {false && <AppBar/> }
      <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/options" element={<Options/>} />
      <Route exact path="/" element={<Home/>} />
      </Routes>
      {false && <Footer/>}
     
        
     
    </BrowserRouter>

    </div>
  );
}

export default App;
