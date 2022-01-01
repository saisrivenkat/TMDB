import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movies/movieslice';
export const store = configureStore({
  reducer: {
    movies: movieReducer
  },
}) 