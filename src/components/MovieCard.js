/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";

import { Appcontext } from "../App.js";
import Card from "./Card.js";

function MovieCard() {
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
    <div className="movie">
      {store.searchTerm === ""
        ? store.curr === "movies"
          ? store.movies.map((movie) => (
              <Card
                movie={movie}
                liked={store.liked.find((item)=>item.id === movie.id)}
                click={click}
              />
            ))
          : store.tvShows.map((movie) => (
            <Card
            movie={movie}
                liked={store.liked.find((item)=>item.id === movie.id)}
                click={click}
                type="TV"
            />
              
            ))
        : store.res.map((movie) => (
          <Card movie={movie} click={click} liked={store.liked.find((item)=>item.id === movie.id)}/>
            
          ))}
    </div>
  );
}
export default MovieCard;
