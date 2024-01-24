import Nav from './Nav';
import Logo from '../assets/Logo .svg';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
    <header id="header">
        <Link to='/'>
        <div className="logo-img">
            <img alt="lemon logo" src={Logo}></img>
        </div>
        </Link>
        <Nav/>
    </header>
    );
};

export default Header