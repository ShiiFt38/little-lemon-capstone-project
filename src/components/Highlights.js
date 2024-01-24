import MenuCard from '../components/MenuCard';

const Highlights = () => {
    const menuItems = [
        {
            image: './images/assets/Greek Salad.jpg',
            food: "Greek Salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: "12.99",
            alt: "Salad"
        },
        {
            image: './images/assets/Bruschetta.jpg',
            food: "Bruschetta",
            description: "Our Bruschetta is made from  grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: "5.99",
            alt: "cheese"
        },
        {
            image: './images/assets/Macaroni.jpg',
            food: "Lemon dessert",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic as can be imagined.",
            price: "7.99",
            alt: "dessert image"
        }
    ];

    const menuItem = menuItems.map((option) => {
        return(
            <MenuCard
                image = {option.image}
                food = {option.food}
                price = {option.price}
                description = {option.description}
                alt = {option.alt}
            />
        );
    });

    return (
        <section id="highlights-section">
            <div id="highlights-grid-1">
                <h1>This week's specials!</h1>
                <button className="cta">Online Menu</button>
            </div>
            <div id="highlights-grid-2">
                {menuItem}
            </div>
        </section>
    );
};

export default Highlights