import Testimony from "./Testimony";

const Testimonials = () => {
    const TestimonyData = [
        { id: 1, image: "", rating: 5, name: "John Shelby", text: " A game-changer" },
        { id: 2, image: "", rating: 4, name: "Jane Doe", text: "Works as expected." },
        { id: 3, image: "", rating: 5, name: "Bob Smith", text: "Highly recommended." },
    ]

    const testimony = TestimonyData.map((profile) => {
        return(
            <Testimony
            key = {profile.id}
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