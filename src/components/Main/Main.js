import './Main.css';
import HomePage from '../HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import ReservationPage from '../ReservationPage/ReservationPage';

function Main() {
    return (
      <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/reservations" element={<ReservationPage />}></Route>
        </Routes>
      </main>
      </>
    );
  }
  
export default Main;