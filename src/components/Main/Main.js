import './Main.css';
import HomePage from '../HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import ReservationPage from '../ReservationPage/ReservationPage';
import { useReducer } from 'react';

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00"];
    default:
      return state;
  }
};

export { initializeTimes, timesReducer };

function Main() {

  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/reservations" element={<ReservationPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default Main;