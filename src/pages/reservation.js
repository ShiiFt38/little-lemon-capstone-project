import Header from "../components/Header";
import BookingForm from "../components/Bookingform";
import { useReducer } from 'react'


const Reservation = () => {
    
    const timesReducer = (state, action) => {
        switch (action.type) {
            case 'INITIALIZE_TIMES':
                return action.payload;
            default:
                return state;
        }
    };

    const initializeTimes = () => {
        return [
          '12:00 PM',
          '1:00 PM',
          '2:00 PM',
          '6:00 PM',
          '7:00 PM',
          '8:00 PM'
        ];
      };
    
      // Step 1: Define state variable for available times using useReducer
      const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

    return (
        <>
            <Header/>
            <div id="res-heading">
                <h1>Table reservations</h1>
            </div>
            
            <div id="res-form">
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} initializeTimes={initializeTimes}/>
            </div>
        </>
    );
};


export default Reservation