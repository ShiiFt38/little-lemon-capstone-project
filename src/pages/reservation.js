import Header from "../components/Header";
import BookingForm from "../components/Bookingform";


const reservation = () => {
    return (
        <>
            <Header/>
            <div id="res-heading">
                <h1>Table reservations</h1>
            </div>
            
            <div id="res-form">
                <BookingForm/>
            </div>
        </>
    );
};


export default reservation