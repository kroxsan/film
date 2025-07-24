import { createSlice } from '@reduxjs/toolkit';

const getWatchListFromStorage = () => {
  const data = localStorage.getItem('watchLater');
  return data ? JSON.parse(data) : [];
};

const writeWatchListToStorage = (watchList) => {
  localStorage.setItem('watchLater', JSON.stringify(watchList));
};

const initialState = {
  list: getWatchListFromStorage(),
};

export const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState,
  reducers: {
    addToWatchLater: (state, action) => {
      const exists = state.list.find(item => item.id === action.payload.id);
      if (!exists) {
        state.list.push(action.payload);
        writeWatchListToStorage(state.list);
      }
    },
    removeFromWatchLater: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
      writeWatchListToStorage(state.list);
    },
    clearWatchLater: (state) => {
    state.list = [];
    writeWatchListToStorage(state.list);
    }

  }
});

export const { addToWatchLater, removeFromWatchLater, clearWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;
