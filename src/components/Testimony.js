import Profile from '../assets/Profile-Icon.png'

const Testimony = (props) => {

    const starRating = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++){
            stars.push(<span key={i}>⭐</span>)
        }
        return <div>{stars}</div>;
    };

    return(
        <div className="testimony-profile">
            {starRating(props.rating)}
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <img src={props.image ? props.image : Profile} className="profile-pic" alt=" "></img>
            <h4>{props.name}</h4>
            </div>
            <p>{props.text}</p>
        </div>
    );
};

export default Testimony