import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';
import { Link} from 'react-router-dom';

 const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return(
    <nav>
        <button id="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </button>

        <ul id="nav-links" className={showMenu ? 'show-menu' : ''}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="#highlights-section">Menu</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
            <li><Link to="/">Order Online</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
    </nav>
    );
};

export default Nav