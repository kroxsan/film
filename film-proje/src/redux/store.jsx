import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice'
import watchLaterReducer from './slices/watchLaterSlice';

export const store = configureStore({
   reducer: {
      movie: movieReducer,
      watchLater: watchLaterReducer,

   },
});