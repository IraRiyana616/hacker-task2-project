import './App.css';
import 'flowbite/dist/flowbite.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
    </>
  );
}

export default App;
