import './App.css';
import 'flowbite/dist/flowbite.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Media from './components/Media';
import Contacts from './components/Contact';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Media />
      <Contacts />
    </>
  );
}

export default App;
