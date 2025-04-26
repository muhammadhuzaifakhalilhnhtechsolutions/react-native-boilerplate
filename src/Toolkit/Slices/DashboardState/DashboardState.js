import {createSlice} from '@reduxjs/toolkit';

const ShowModalSlice = createSlice({
  name: 'stateVisible',
  initialState: {
    show: false,
  },
  reducers: {
    show: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const {show} = ShowModalSlice.actions;
export default ShowModalSlice.reducer;
