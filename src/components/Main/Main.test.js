import { initializeTimes, timesReducer } from './Main';

test("initializeTimes returns correct initial state", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns the same state for now", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00"];
  const action = { type: "UPDATE_TIMES", payload: "2023-02-18" };
  const updatedState = timesReducer(initialState, action);
  expect(updatedState).toEqual(initialState);
});