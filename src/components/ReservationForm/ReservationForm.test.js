import { render, screen } from '@testing-library/react';
import ReservationForm from "./ReservationForm";

test("Renders the ReservationForm heading", () => {
  render(<ReservationForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});