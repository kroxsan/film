import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice'
import filterReducer from './slices/filterSlice';
import watchLaterReducer from './slices/watchLaterSlice';

export const store = configureStore({
   reducer: {
      movie: movieReducer,
      filter: filterReducer,
      watchLater: watchLaterReducer
   },
});