
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import { Nav } from './component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
    
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/User" element={<User/>}/>

        </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
