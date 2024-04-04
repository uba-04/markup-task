import { Link } from 'react-router-dom';
import './styles/Header.css'; // Assuming you have a css file for styling your Header
import logo from './home.png';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/account">My Account</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button><Link to="/">Sign In</Link></button>
        <button><Link to="/signup">Join Us</Link></button>
      </div>
    </header>
  );
};

export default Header;