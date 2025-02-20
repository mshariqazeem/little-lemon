import './Header.css';
import Nav from "../Nav/Nav";

function Header() {
    return (
      <header className='page-header'>
        <img src="./Logo.svg" alt="Logo"/>
        <Nav/>
      </header>
    );
  }
  
export default Header;