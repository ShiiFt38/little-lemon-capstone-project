import { useState } from "react";
import { validateEmail } from "../utils";

const BookingForm = ({availableTimes, dispatch, initializeTimes} ) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted")
    }

    const formValidation = (email) => {
        return(
            firstName &&
            phone &&
            validateEmail(email) &&
            date &&
            times &&
            guests
        );
    }

    const handleDateChange = (e) => {
        dispatch({type: 'INITIALIZE_TIMES', payload: initializeTimes()});
        setDate(e.target.value)
    };

    return(
        <form style={{display: "grid", gap: "20px"}}>
            <fieldset>
                <div>
                    <label htmlFor="firstname">First Name: <sup>*</sup></label>
                    <input 
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}></input>

                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        id="lastName" 
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        id='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>

                    <label htmlFor="phone">Phone: <sup>*</sup></label>
                    <input 
                        type="phone" 
                        id="phone"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}></input>
                </div>
                <div>
                    <label for="res-date">Choose Date: <sup>*</sup></label>
                    <input 
                        type="date" 
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}></input>
                </div>
                <div>
                    <label htmlFor="res-time">Choose Time: <sup>*</sup></label>
                    <select 
                        id="res-time"
                        value={times}
                        onChange={(e) => {
                            setTimes(e.target.value)
                        }}>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests: <sup>*</sup></label>
                    <input 
                        type="number" 
                        placeholder="1" 
                        min="1" 
                        max="10" 
                        id="guests"
                        value={guests}
                        onChange={(e) => {
                            setGuests(e.target.value);
                        }}></input>
                </div>
                <div>
                    <label htmlFor="occasion">Occasion: </label>
                    <select 
                        id="occasion"
                        value={occasion}
                        onChange={(e) => {
                            setOccasion(e.target.value);
                        }}>
                        <option>Casual</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <button 
                disabled={!formValidation}
                id="form-button"
                type="submit"
                onClick={handleSubmit}
                className="cta"
                style={{marginInline: "auto"}}>Make Your Reservation</button>
            </fieldset>
        </form>
    );
};

export default BookingForm