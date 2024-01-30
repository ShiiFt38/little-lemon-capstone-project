import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';
import { Link, useLocation} from 'react-router-dom';

 const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    // const [ activeLink, setActiveLink ] = useState('/');

// to get the current location of the router path associated with the below links
    const location = useLocation();

// the setter function responsible for the state controlling the extending and closing of the responsive mobile menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

// when a link is clicked, showMenu state becomes false and the activeLink state is set to the clicked link's path
    const handleClick = () => {
        setShowMenu(false);
        // setActiveLink(path);
    };

    return(
    <nav>
        <button id="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </button>

        <ul id="nav-links" className={showMenu ? 'show-menu' : ''}>
            <li><Link onClick={() => handleClick()} to="/" className={location.pathname === '/' ? 'active' : " "}>Home</Link></li>
            <li><Link onClick={() => handleClick()} to="/" className={location.pathname === '/about' ? 'active' : " "}>About</Link></li>
            <li><Link onClick={() => handleClick()} to="#highlights-section" className={location.pathname === '/menu' ? 'active' : " "}>Menu</Link></li>
            <li><Link onClick={() => handleClick()} to="/reservation" className={location.pathname === '/reservation' ? 'active' : " "}>Reservations</Link></li>
            <li><Link onClick={() => handleClick()} to="/" className={location.pathname === '/order' ? 'active' : " "}>Order Online</Link></li>
            <li><Link onClick={() => handleClick()} to="/" className={location.pathname === '/login' ? 'active' : " "}>Login</Link></li>
        </ul>
    </nav>
    );
};

export default Nav