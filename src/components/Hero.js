import Banner from '../assets/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero-section">
            <div id="hero-grid-1">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.</p>
                <Link to='/reservation'><button className="cta"> Reserve a Table</button></Link>
            </div>
            <div id="hero-grid-2">
                <img src={Banner} alt=" "></img>
            </div>
        </section>
    );
};

export default Hero;