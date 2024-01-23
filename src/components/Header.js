import Nav from './Nav'
import Logo from '../assets/Logo .svg'

const Header = () => {

    return(
    <header id="header">
        <img alt="lemon logo" src={Logo}></img>
        <Nav/>
    </header>
    );
};

export default Header