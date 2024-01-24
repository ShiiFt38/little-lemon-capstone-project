import MenuCard from '../components/MenuCard';
import salad from '../assets/Greek Salad.jpg';
import bruschetta from '../assets/Bruschetta.jpg';
import dessert from '../assets/Macaroni.jpg';

const Highlights = () => {
    const menuItems = [
        {
            image: {salad},
            food: "Greek Salad",
            description: "",
            price: "12.99"
        },
        {
            image: {bruschetta},
            food: "Bruschetta",
            description: "",
            price: "5.99"
        },
        {
            image: {dessert},
            food: "Lemon dessert",
            description: "",
            price: "7.99"
        }
    ];
    const menuItem = menuItems.map((option) => {
        return(
            <MenuCard
                image = {option.image}
                food = {option.food}
                price = {option.price}
                description = {option.description}
            />
        )
    })

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