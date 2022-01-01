/* eslint-disable linebreak-style */

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './MovieCard';
import {
  fetchmovies, fetchtvshows, changecurrent, query,
} from '../redux/movies/movieslice';

function PopularMovies() {
  const dispatch = useDispatch();
  const Query = useSelector(query);
  const [currenttype, setcurrenttype] = useState('movies');
  useEffect(() => {
    dispatch(fetchmovies());
    dispatch(fetchtvshows());
  });

  const change = (type) => {
    dispatch(changecurrent(type));
    setcurrenttype(type);
  };
  return (
    <div className="popular">
      {Query ? null
        : (
          <div className="popular__title">
            <h2>What&apos;s Popular</h2>

            <div className="popular__items">
              <ul>
                <li
                  onClick={() => change('movies')}
                  className={
                    (currenttype === 'movies' ? 'popular--active ' : null)
                  }
                >
                  In Theaters
                </li>
                <li
                  onClick={() => change('tv')}
                  className={
                    (currenttype === 'tv' ? 'popular--active ' : null)
                  }
                >
                  On TV
                </li>

              </ul>
            </div>
          </div>
        )}
      <div className="popular__cards">
        <Card type={currenttype} />
      </div>
    </div>
  );
}

export default PopularMovies;
