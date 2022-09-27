import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/clients" element={<Clients />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </>
  );
}

export default App;
