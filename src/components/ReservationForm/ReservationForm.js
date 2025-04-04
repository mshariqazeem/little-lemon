import { useState, useEffect } from 'react';
import "./ReservationForm.css";

function ReservationForm({ availableTimes, updateTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Check if form is valid using custom logic
    const isValid =
      date &&
      time &&
      guests >= 1 && guests <= 10 &&
      occasion;

    setFormValid(isValid);
  }, [date, time, guests, occasion]);

  const validateField = (fieldName, value) => {
    const errors = { ...formErrors };

    switch (fieldName) {
      case 'date':
        errors.date = value ? "" : "Please select a date.";
        break;
      case 'time':
        errors.time = value ? "" : "Please select a time.";
        break;
      case 'guests':
        if (!value) errors.guests = "Please enter number of guests.";
        else if (value < 1 || value > 10) errors.guests = "Guests must be between 1 and 10.";
        else errors.guests = "";
        break;
      case 'occasion':
        errors.occasion = value ? "" : "Please select an occasion.";
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose Date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} onBlur={() => validateField("date", date)}
      required aria-describedby="date-description" />
      <span id="date-description" className="sr-only">Select a date for your reservation</span>
      {formErrors.date && <p className="error-msg">{formErrors.date}</p>}

      <label htmlFor="res-time">Choose Time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} onBlur={() => validateField("time", time)}
      required>
        <option value="">Select a Time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {formErrors.time && <p className="error-msg">{formErrors.time}</p>}

      <label htmlFor="guests">Number of Guests</label>
      <input type="number" id="guests" min="1" max="10" value={guests} onChange={(e) => setGuests(Number(e.target.value))} onBlur={() => validateField("guests", guests)} required aria-describedby="guests-description" />
      <span id="guests-description" className="sr-only">Enter the number of guests, between 1 and 10</span>
      {formErrors.guests && <p className="error-msg">{formErrors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} onBlur={() => validateField("occasion", occasion)} required>
        <option value="">Select an Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formErrors.occasion && <p className="error-msg">{formErrors.occasion}</p>}

      <button type="submit" aria-label="Submit your reservation" disabled={!formValid}>Make Your Reservation</button>
    </form>
  );
}

export default ReservationForm;
