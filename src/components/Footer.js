import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <footer id="footer">

            <div>
                <h2>Doormat Navigation</h2>
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h2>Contact</h2>
                <nav>
                    <ul>
                        <li><a>Address</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h2>Social Media Links</h2>
                <nav>
                    <ul>
                        <li><a>Address</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <Link to='/'><div id="footer-logo"></div></Link>
            </div>
        </footer>
    )
};

export default Footer