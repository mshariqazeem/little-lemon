import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer>
        <section className='footer-content-container'>
          <img src="./Lemon-Icon.png" alt="Company Icon"></img>

          <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/">ABOUT</Link></li>
              <li><Link to="/">MENU</Link></li>
              <li><Link to="/reservations">RESERVATIONS</Link></li>
              <li><Link to="/">ORDER ONLINE</Link></li>
              <li><Link to="/">LOGIN</Link></li>
          </ul>

          <ul>
              <li><Link to="/">Address</Link></li>
              <li><Link to="/">Phone Number</Link></li>
              <li><Link to="/">Email</Link></li>
          </ul>

          <ul>
              <li><Link to="/">Address</Link></li>
              <li><Link to="/">Phone Number</Link></li>
              <li><Link to="/">Email</Link></li>
          </ul>
        </section>
      </footer>
    );
  }

export default Footer;