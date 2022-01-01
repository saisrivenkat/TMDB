import React, { useEffect, useState } from 'react';
import Card from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmovies, fetchtvshows, changecurrent, query } from '../redux/movies/movieslice.js';
const PopularMovies = () => {
  const dispatch = useDispatch();
  const Query = useSelector(query);
  const [currenttype, setcurrenttype] = useState("movies");
  useEffect(() => {
    dispatch(fetchmovies())
    dispatch(fetchtvshows())
  })

  const change = (type) => {
    dispatch(changecurrent(type))
    setcurrenttype(type);
    console.log(currenttype)

  }
  return (
    <div className="popular">
      {Query ? null :
        <div className="popular__title">
          <h2>What's Popular</h2>

          <div className="popular__items">
            <ul>
              <li onClick={() => change('movies')} className={
                (currenttype === 'movies' ? "popular--active " : null)
              }>In Theaters</li>
              <li onClick={() => change('tv')} className={
                (currenttype === 'tv' ? "popular--active " : null)
              }>On TV</li>

            </ul>
          </div>
        </div>
      }
      <div className="popular__cards">
        <Card type={currenttype} />
      </div>
    </div>
  )
};

export default PopularMovies;