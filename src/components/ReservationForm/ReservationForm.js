import { useState } from 'react';
import "./ReservationForm.css";

function ReservationForm({ availableTimes, updateTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose Date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required aria-describedby="date-description" />
      <span id="date-description" className="sr-only">Select a date for your reservation</span>

      <label htmlFor="res-time">Choose Time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select a Time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests</label>
      <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(Number(e.target.value))} required aria-describedby="guests-description" />
      <span id="guests-description" className="sr-only">Enter the number of guests, between 1 and 10</span>

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option value="">Select an Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" aria-label="Submit your reservation">Make Your Reservation</button>
    </form>
  );
}

export default ReservationForm;
