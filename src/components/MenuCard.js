const MenuCard = (props) => {

    return (
        <div className="card">
            <img src={props.image} className="menu-image" alt={props.food}></img>
            <div className="card-info">
                <div className="food-item">
                    <h4>{props.food}</h4>
                    <p>{props.price}</p>
                </div>
                <p>{props.description}</p>
                <div className="menu-cta">
                    <p>Order a delivery</p>
                    <i>icon</i>
                </div>
            </div>
        </div>
    );
};

export default MenuCard