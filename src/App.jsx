// App.jsx
import './App.css';
import 'flowbite/dist/flowbite.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Media from './components/Media';
import Contacts from './components/Contact';
import { Login } from './components/Login';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const isAuthenticated = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />
        <Route
          path="/services"
          element={<PrivateRoute element={<Services />} />}
        />
        <Route path="/media" element={<PrivateRoute element={<Media />} />} />
        <Route
          path="/contacts"
          element={<PrivateRoute element={<Contacts />} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
