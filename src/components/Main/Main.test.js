// ✅ Now import after mock is set
import { initializeTimes, timesReducer } from './Main';
import { fetchAPI } from '../../utils/api';

test("initializeTimes returns correct available times from fetchAPI", async () => {
  const times = await initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("timesReducer handles UPDATE_TIMES correctly", () => {
  const initialState = [];
  const action = {
    type: "UPDATE_TIMES",
    payload: ["18:00", "19:00", "20:00"]
  };
  const updatedState = timesReducer(initialState, action);
  expect(updatedState).toEqual(["18:00", "19:00", "20:00"]);
});
