const { createSlice } = require("@reduxjs/toolkit");

const mapSlice = createSlice({
  name: "map",
  initialState: { directions: "", travelDuration: "", travelDurationValue: 0 },
  reducers: {
    setDirections: (state, { payload }) => ({ ...state, directions: payload }),
    setTravelDuration: (state, action) => {
      state.travelDuration = action.payload.text;
      state.travelDurationValue = action.payload.value;
    },
  },
});

export const { setDirections, setTravelDuration } = mapSlice.actions;

export const mapReducer = mapSlice.reducer;
