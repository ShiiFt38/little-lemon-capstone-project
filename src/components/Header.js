import Nav from './Nav'
import Logo from '../assets/Logo .svg'

const Header = () => {

    return(
    <header id="header">
        <div className="logo-img">
            <img alt="lemon logo" src={Logo}></img>
        </div>
        <Nav/>
    </header>
    );
};

export default Header