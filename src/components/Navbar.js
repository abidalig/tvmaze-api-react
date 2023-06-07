
import '../CSS/style.css';
import { Link } from 'react-router-dom';


function NavBar() {
  
    return ( <>
    <ul className='navUL'>
  <li><Link className="active" to="/">Home</Link></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
  
</ul>
    </> );
}

export default NavBar;