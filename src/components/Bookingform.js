import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({ availableTimes, dispatch, initializeTimes }) => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            date: "",
            times: "",
            guests: 0,
            occasion: ""
        },
        onSubmit: (values) => { 
            console.log(values);
            navigate('/ConfirmedBooking'); 
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(3, "Must be atleast 3 characters"),
            email: Yup.string().email("Invalid email address")
        })
    })

    /*const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]:value
        }))
        console.log(formData)
    }

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        times: "",
        guests: 0,
        occasion: ""
    })

    const navigate = useNavigate();

        const [date, setDate] = useState({
        value: "",
        isTouched: false
    });
        const handleDateChange = (e) => {
        dispatch({ type: 'INITIALIZE_TIMES', payload: initializeTimes() });
        setDate({ ...date, isTouched: true, value: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/ConfirmedBooking');
    }
        */

    const today = new Date().toISOString().split('T')[0];

    return (
        <form style={{ display: "grid", gap: "20px" }} onSubmit={formik.handleSubmit}>
            <fieldset>

                <div className="field">
                    <label htmlFor="firstname">First Name: <sup>*</sup></label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstName"
                        required
                        value={formik.values.firstName}
                        onChange={formik.handleChange}></input>
                    <p className="field-error">{formik.errors.firstName}</p>
                </div>

                <div className="field">
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}></input>
                </div>

                <div className="field">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id='email'
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}></input>
                        <p className="field-error">{formik.errors.email}</p>
                </div>

                <div className="field">
                    <label htmlFor="phone">Phone: <sup>*</sup></label>
                    <input
                        type="phone"
                        id="phone"
                        required
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}></input>
                        <p className="field-error">{formik.errors.phone}</p>
                </div>

                <div className="field">
                    <label htmlFor="date">Choose Date: <sup>*</sup></label>
                    <input
                        type="date"
                        id="date"
                        required
                        min={today}
                        value={formik.values.date}
                        onChange={formik.handleChange}></input>
                    {/* {date.isTouched && date.value < today ? <p className="field-error">Reservations can only be made for today or later</p> : null} */}
                </div>


                <div className="field">
                    <label htmlFor="times">Choose Time: <sup>*</sup></label>
                    <select
                        id="times"
                        required
                        value={formik.values.times}
                        onChange={formik.handleChange}>
                        <option value=""></option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="guests">Number of guests: <sup>*</sup></label>
                    <input
                        type="number"
                        placeholder="0"
                        min="1"
                        max="10"
                        id="guests"
                        required
                        value={formik.values.guests}
                        onChange={formik.handleChange}></input>
                </div>

                <div className="field">
                    <label htmlFor="occasion">Occasion: </label>
                    <select
                        id="occasion"
                        value={formik.values.occasion}
                        name="occasion"
                        onChange={formik.handleChange}>
                        <option value=""></option>
                        <option value="Casual">Casual</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>

                <button
                    id="form-button"
                    type="submit"
                    className="cta"
                    style={{ marginInline: "auto" }}>Make Your Reservation</button>
            </fieldset>
        </form>
    );
};

export default BookingForm