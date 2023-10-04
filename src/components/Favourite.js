import React, { useContext } from "react";
import Card from "./Card";
import { Appcontext } from "../App";
const Liked = () => {
  const store = useContext(Appcontext);
  console.log(store);
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
    <div className="" style={{ margin: "auto 50px" }}>
      {store.liked.length > 0 ? (
        <>
          <h1>Liked Movies</h1>
          <div className="movie">
            {store.liked.map((movie) => {
                console.log(movie)
              return (
                <Card
                  movie={movie}
                  click={click}
                  liked={store.liked.find((item) => item.id === movie.id)}
                  type={movie.original_name?"TV":"Movie"}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h2>No Liked Movies</h2>
      )}
    </div>
  );
};
export default Liked;
