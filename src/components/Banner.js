/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery, queryFetch } from '../redux/movies/movieslice';

function Banner() {
  const dispatch = useDispatch();
  const [query, setquery] = useState('');
  const change = (e) => {
    setquery(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(setQuery(query));
    dispatch(queryFetch(query));
    setquery('');
  };
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__title">
          <h2>Welcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
        <div className="banner__searchbox">
          <input onChange={(e) => change(e)} value={query} type="text" placeholder="Search for a movie,tv show,person...." />
          <input onClick={(e) => submit(e)} type="submit" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}
export default Banner;
