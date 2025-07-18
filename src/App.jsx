import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Home from './Home';
import { Signup } from './Signup';
import { About } from './About';
import { Contact } from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="logo">🛒 Online Store</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
