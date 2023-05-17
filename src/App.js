// import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Github from './Components/Github_Calender/Github';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

function App() {

  const { colorMode, toggleColorMode } = useColorMode("dark");

  if(colorMode=="light"){
    console.log(colorMode)
    return (
      <div className="App" style={{backgroundColor:"#ecf5ff"}} >
  
        <Navbar />
        
        <Home />
        <About />
        <Skills />
        <Projects />
        <Github />
        <Contact />
        <Footer />
  
      </div>
    );
  }
  return (
    <div className="App" style={{margin:"0px", padding:"0px",maxWidth:"100%"}} >

      <Navbar />
      
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <Footer />

    </div>
  );

}

export default App;
