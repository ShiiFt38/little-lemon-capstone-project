import About from "./About";
import Header from "./Header";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";

const Main = () => {
    return (
        <main id="main">
            <Header/>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    );
};

export default Main