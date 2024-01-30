import { useState } from "react";

const BookingForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted")
    }
    return(
        <form style={{display: "grid", gap: "20px", BackgroundColor: "blue"}}>
            <fieldset>
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input 
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}></input>

                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        id="lastName" 
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>

                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="phone" 
                        id="phone"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}></input>
                </div>
                <div>
                    <label for="res-date">Choose Date</label>
                    <input type="date" id="res-date"></input>
                </div>
                <div>
                    <label htmlFor="res-time">Choose Time</label>
                    <select 
                        id="res-time"
                        value={times}
                        onChange={(e) => {
                            setTimes(e.target.value)
                        }}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
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
                    <label htmlFor="occasion">Occasion</label>
                    <select 
                        id="occasion"
                        value={occasion}
                        onChange={(e) => {
                            setOccasion(e.target.value);
                        }}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <button 
                type="submit"
                onClick={handleSubmit}
                className="cta"
                style={{marginInline: "auto"}}>Make Your Reservation</button>
            </fieldset>
        </form>
    );
};

export default BookingForm