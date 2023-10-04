/* eslint-disable linebreak-style */
import React, { useEffect,useState,useContext } from 'react';
import { useSelector } from 'react-redux';
import { moviedetails } from '../../redux/movies/movieslice';
import Card from '../Card.js';

import { Appcontext } from "../../App.js";
function MovieDetailBanner({details,similar,type}) {
  const store = useContext(Appcontext);
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
    <>
    <div className="detail__banner" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path})` }}>
      <div className="detail__banner__custom_bg">
        <div className="detail__banner__img">
          <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`} alt="movie" />
        </div>
        <div className="detail__banner__content">
          <h1>{details.name ? details.name : details.original_title}</h1>

          <h3>Overview</h3>
          <p>{details.overview}</p>
          {details.name ? null
            : (
              <p style={{ fontWeight: '700' }}>
                Duration :
                <span style={{ fontWeight: '300' }}>
                  {' '}
                  {details.runtime}
                  {' '}
                  m
                </span>
              </p>
            )}
        </div>
      </div>
    </div>
    <div className='' style={{margin:"auto 50px",paddingTop:"10px"}}>
      <h2>Similar Movies</h2>
      <div className='movie'>
    {similar?.map((movie)=><Card movie={movie} liked={store.liked.find((item)=>item.id === movie.id)}
                click={click} type={type} />) }
          
    </div>
    </div>
    </>
  );
}

export default MovieDetailBanner;
