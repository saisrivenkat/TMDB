/* eslint-disable linebreak-style */

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState } from 'react';
import Card from './MovieCard';
import { Appcontext } from '../App';
import MovieCard from './Card';

function PopularMovies() {
  const store = useContext(Appcontext);
  const [currenttype, setcurrenttype] = useState('movies');
  

  const change = (type) => {
    store.setcurr(type);
    setcurrenttype(type);
  };
  const click = (movie) => {
    console.log(movie.id);
    const isThere = store.liked.filter(
      (liked_movie) => liked_movie.id === movie.id
    );
    if (isThere.length > 0) {
      const new_liked = store.liked.filter(
        (liked_movie) => liked_movie.id !== movie.id
      );
      store.setliked(new_liked);
    } else {
      store.setliked([...store.liked, movie]);
    }
  };
  return (
    <div className="popular">
      {store.searchTerm ? null
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
        <Card  />
      </div>
      <div className='scifi_cards'>
        <h2>Sci-fi movies</h2>
        <div className='movie' style={{}}>
        {store.scifi.map((movie)=>{
          return(
            <MovieCard movie={movie} liked={store.liked.find((item)=>item.id === movie.id)} click={click} />
          )
        })}
        </div>
        
      </div>
      <div className='scifi_cards'>
        <h2>Animation movies</h2>
        <div className='movie' style={{}}>
        {store.animation.map((movie)=>{
          return(
            <MovieCard movie={movie} liked={store.liked.find((item)=>item.id === movie.id)} click={click} />
          )
        })}
        </div>
        
      </div>
    </div>
  );
}

export default PopularMovies;
