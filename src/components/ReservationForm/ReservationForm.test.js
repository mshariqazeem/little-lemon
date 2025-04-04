import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from "./ReservationForm";

describe("ReservationForm Input Field Attributes", () => {
  test("Date input has correct attributes", () => {
    render(
      <ReservationForm availableTimes={[]} updateTimes={() => {}} submitForm={() => {}} />
    );
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("type", "date");
  });

  test("Time select is required", () => {
    render(
      <ReservationForm availableTimes={[]} updateTimes={() => {}} submitForm={() => {}} />
    );
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("Guests input has correct attributes", () => {
    render(
      <ReservationForm availableTimes={[]} updateTimes={() => {}} submitForm={() => {}} />
    );
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("Occasion select is required", () => {
    render(
      <ReservationForm availableTimes={[]} updateTimes={() => {}} submitForm={() => {}} />
    );
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe("ReservationForm Validation Logic", () => {
  test("Submit button is disabled with default/empty inputs", () => {
    render(
      <ReservationForm availableTimes={["17:00"]} updateTimes={() => {}} submitForm={() => {}} />
    );
    const submitButton = screen.getByText(/make your reservation/i);
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled when all inputs are valid", () => {
    render(
      <ReservationForm availableTimes={["18:00"]} updateTimes={() => {}} submitForm={() => {}} />
    );
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2024-12-31" } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "3" } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });

    const submitButton = screen.getByText(/make your reservation/i);
    expect(submitButton).not.toBeDisabled();
  });

  test("Displays error if number of guests is more than 10", () => {
    render(
      <ReservationForm availableTimes={["18:00"]} updateTimes={() => {}} submitForm={() => {}} />
    );
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "15" } });
    fireEvent.blur(guestsInput);
    expect(screen.getByText(/guests must be between 1 and 10/i)).toBeInTheDocument();
  });
});
