const MenuCard = (props) => {

    return (
        <div className="card">
            <img src={props.image} className="menu-image" alt={props.alt}></img>
            <div className="card-info">
                <div className="food-item">
                    <h4>{props.food}</h4>
                    <p>${props.price}</p>
                </div>
                <p>{props.description}</p>
                <button className="menu-cta">
                    <p>Order a delivery</p>
                    <img src="./images/assets/f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg" alt="" className="delivery-icon"></img>
                </button>
            </div>
        </div>
    );
};

export default MenuCard