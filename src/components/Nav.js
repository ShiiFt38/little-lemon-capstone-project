import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';
import { Link} from 'react-router-dom';

 const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleClick = () => {
        setShowMenu(false)
    };

    return(
    <nav>
        <button id="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </button>

        <ul id="nav-links" className={showMenu ? 'show-menu' : ''}>
            <li><Link onClick={handleClick} to="/">Home</Link></li>
            <li><Link onClick={handleClick} to="/">About</Link></li>
            <li><Link onClick={handleClick} to="#highlights-section">Menu</Link></li>
            <li><Link onClick={handleClick} to="/reservation">Reservations</Link></li>
            <li><Link onClick={handleClick} to="/">Order Online</Link></li>
            <li><Link onClick={handleClick} to="/">Login</Link></li>
        </ul>
    </nav>
    );
};

export default Nav