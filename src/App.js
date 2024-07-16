import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  return (
    <>
    <BrowserRouter basename='/Test_githubpages'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>


    </BrowserRouter>
    </>
  );
}

export default App;
