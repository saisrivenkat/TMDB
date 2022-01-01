/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchmovies = createAsyncThunk('movies/fetchmovies', async () => {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&page=1';
  const res = await fetch(url);
  const result = await res.json();
  return result.results;
});
export const fetchtvshows = createAsyncThunk('tvshows/fetchtvshows', async () => {
  const url = 'https://api.themoviedb.org/3/tv/popular?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&page=1';
  const res = await fetch(url);
  const result = await res.json();
  return result.results;
});
export const fetchMovieDetails = createAsyncThunk('movie/details', async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US`;
  const res = await fetch(url);
  const result = await res.json();
  return result;
});

export const fetchTvShowDetails = createAsyncThunk('movie/details', async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US`;
  const res = await fetch(url);
  const result = await res.json();
  return result;
});
export const queryFetch = createAsyncThunk('movie/query', async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&query=${query}&page=1&include_adult=false`;
  const res = await fetch(url);
  const result = await res.json();
  return result.results;
});

const initialState = {
  movies: [],
  tvshows: [],
  moviedetail: {},
  query: '',
  queryresults: [],
  current: 'movies',
};

export const movieslice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    changecurrent: (state, { payload }) => {
      state.current = payload;
    },
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
  },
  extraReducers: {

    [fetchmovies.fulfilled]: (state, { payload }) => ({ ...state, movies: payload }),

    [fetchtvshows.fulfilled]: (state, { payload }) => ({ ...state, tvshows: payload }),

    [fetchMovieDetails.fulfilled]: (state, { payload }) => ({ ...state, moviedetail: payload }),
    [fetchTvShowDetails.fulfilled]: (state, { payload }) => ({ ...state, moviedetail: payload }),
    [queryFetch.fulfilled]: (state, { payload }) => ({ ...state, queryresults: payload }),
  },
});
export const { changecurrent } = movieslice.actions;
export const { setQuery } = movieslice.actions;
export const getallmovies = (state) => state.movies.movies;
export const getalltvshows = (state) => state.movies.tvshows;
export const current = (state) => state.movies.current;
export const query = (state) => state.movies.query;
export const moviedetails = (state) => state.movies.moviedetail;
export const queryresults = (state) => state.movies.queryresults;
export default movieslice.reducer;
