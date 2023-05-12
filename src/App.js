import React, { lazy, Suspense } from 'react'
// import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import SignUp from "./pages/SignUp";
import Nvabar from "./Navbar";
import Footer from './Components/Home/Footer'
import Loder from './pages/Loder';
 
const Home = lazy(()=> import('./pages/Home') )
const Services =lazy (()=> import('./pages/Services'))
const Contact = lazy (()=> import('./pages/Contact'))
const About = lazy (()=> import('./pages/About'))
const SignUp = lazy (()=> import('./pages/SignUp.js'))
function App() {

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<Loder/>} >
    <Nvabar/>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Signup" element={<SignUp/>}/>
        </Routes>

    <Footer/>
    </Suspense>
      </BrowserRouter>
      
    </>
  );
}

export default App;
