import ReservationForm from "../ReservationForm/ReservationForm";
import "./ReservationPage.css";

function ReservationPage({ availableTimes, updateTimes, submitForm }) {
    return (
        <section className="reservation-page">
            <section className="reservation-form-container">
               <h1>Reserve a Table</h1>
               <p>Reserve your table at Little Lemon!</p>
               <ReservationForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
            </section>
        </section>
    );
}

export default ReservationPage;