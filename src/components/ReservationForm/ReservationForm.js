import { useState } from 'react';
import "./ReservationForm.css";

function ReservationForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation submitted!");
        setDate("");
        setTime("");
        setGuests(0);
        setOccasion("");
    };

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose Date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required aria-required="true" aria-describedby="date-description"/>
            <span id="date-description" className="sr-only">Select a date for your reservation</span>

            <label htmlFor="res-time">Choose Time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required aria-required="true">
                <option value="">Select a Time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of Guests</label>
            <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required aria-required="true" aria-describedby="guests-description"/>
            <span id="guests-description" className="sr-only">Enter the number of guests, between 1 and 10</span>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required aria-required="true">
                <option value="">Select an Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit" aria-label="Submit your reservation">Make Your Reservation</button>
        </form>
    );
}

export default ReservationForm;