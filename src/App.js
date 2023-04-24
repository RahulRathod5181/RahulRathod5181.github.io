// import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Github from './Components/Github_Calender/Github';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar/>
      </ChakraProvider>
      <Home/>
      <About/>
      <Skills/>
      <Github/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
