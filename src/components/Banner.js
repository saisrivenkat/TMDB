/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import { Appcontext } from '../App';

function Banner() {
  const store=useContext(Appcontext)
  const [query, setquery] = useState('');
  const change = (e) => {
    setquery(e.target.value);
  };
  const search_result =async()=>{
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&query=${query}&page=1&include_adult=false`)
    const result = await res.json();
    console.log(result)
  }
  const submit = (e) => {
    e.preventDefault();
    store.setSearchTerm(query);
    search_result();
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
