import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navabr';
import Home from './Component/Home';


import Contact from './Component/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
   <>


   <BrowserRouter>
      <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="*" element={<><h1>bfbfjbv</h1></>} />
       
      </Routes>
    </BrowserRouter>
 
  </>

  );
}

export default App;
