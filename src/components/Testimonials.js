import Testimony from "./Testimony";

const Testimonials = () => {
    const TestimonyData = [
        { image: "", rating: 5, name: "John Shelby", text: " A game-changer" },
        { image: "", rating: 4, name: "Jane Doe", text: "Works as expected." },
        { image: "", rating: 5, name: "Bob Smith", text: "Highly recommended." },
    ]

    const testimony = TestimonyData.map((profile) => {
        return(
            <Testimony
                rating = {profile.rating}
                name = {profile.name}
                text = {profile.text}
                image = {profile.image}
            />
        );
    });

    return(
        <section id="testimonials-section">
            <div id="testimonial-grid-1">
                <h1>Testimonials</h1>
            </div>
            <div id="testimonial-grid-2">
                {testimony}
            </div>
        </section>
    );
};

export default Testimonials