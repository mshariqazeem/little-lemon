import './Main.css';
import { useEffect, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ReservationPage from '../ReservationPage/ReservationPage';
import ConfirmedBooking from '../ConfirmedBooking/ConfirmedBooking';
import { fetchAPI, submitAPI } from '../../utils/api';

// ✅ Reducer to manage available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

// ✅ Exported for testing
const initializeTimes = async () => {
  const today = new Date();
  return fetchAPI(today);
};

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  // ✅ Initialize times on mount
  useEffect(() => {
    const loadTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: "INITIALIZE_TIMES", payload: times });
    };
    loadTimes();
  }, []);

  // ✅ Update times when date changes
  const updateTimes = (dateStr) => {
    const date = new Date(dateStr);
    const times = fetchAPI(date);
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  // ✅ Submit form and redirect
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reservations"
          element={
            <ReservationPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;

// ✅ Export for unit testing
export { initializeTimes, timesReducer };