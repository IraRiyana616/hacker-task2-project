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
        <Route
          path="/home"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<Home />}
            />
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<About />}
            />
          }
        />
        <Route
          path="/service"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<Services />}
            />
          }
        />
        <Route
          path="/media"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<Media />}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<Contacts />}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
