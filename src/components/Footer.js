import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <footer id="footer">

            <div>
                <h2>Doormat Navigation</h2>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </div>
            <div>
                <h2>Contact</h2>
                <nav>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </nav>
            </div>
            <div>
                <h2>Social Media Links</h2>
                <nav>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
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