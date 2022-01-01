/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getallmovies, getalltvshows, current, query, queryresults,
} from '../redux/movies/movieslice';

function MovieCard() {
  const movies = useSelector(getallmovies);
  const cur = useSelector(current);
  const tvshows = useSelector(getalltvshows);
  const q = useSelector(query);
  const results = useSelector(queryresults);
  return (
    <div className="movie">
      {q === ''
        ? cur === 'movies' ? movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}>
            <div className="movie__content">
              <div className="movie__img">
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movie-name" height="200" />
              </div>
              <div className="movie__rating">
                <span>
                  {movie.vote_average * 10}
                  %
                </span>
              </div>
              <div className="movie__title">
                <h4>{movie.original_title}</h4>
              </div>
              <div className="movie__releasedate">
                <span>Dec 17,2021</span>
              </div>
            </div>
          </Link>
        ))
          : tvshows.map((movie) => (
            <Link to={`/tv/${movie.id}`} style={{ textDecoration: 'none' }}>
              <div className="movie__content">
                <div className="movie__img">
                  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movie-name" height="200" />
                </div>
                <div className="movie__rating">
                  <span>
                    {movie.vote_average * 10}
                    %
                  </span>
                </div>
                <div className="movie__title">
                  <h4>{movie.name}</h4>
                </div>
                <div className="movie__releasedate">
                  <span>Dec 17,2021</span>
                </div>
              </div>
            </Link>
          ))

        : results.map((movie) => (
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}>
            <div className="movie__content">
              <div className="movie__img">
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movie-name" height="200" />
              </div>
              <div className="movie__rating">
                <span>
                  {movie.vote_average * 10}
                  %
                </span>
              </div>
              <div className="movie__title">
                <h4>{movie.original_title}</h4>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
export default MovieCard;
