import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Card = (props) => {
  const { movie, liked, click, type } = props;
  console.log(liked);
  return (
    <>
      <div className="movie__content">
        {liked ? (
          <div className="movie__favourite" onClick={() => click(movie)}>
            <div className="movie__icon">
              <FavoriteOutlinedIcon
                style={{ fill: "red" }}
                className="love__icon"
              />
            </div>
          </div>
        ) : (
          <div className="movie__favourite" onClick={() => click(movie)}>
            <div className="movie__icon">
              <FavoriteBorderOutlinedIcon className="love__icon" />
            </div>
          </div>
        )}
        <Link
          to={type !== "TV" ? `/movies/${movie.id}` : `/tv/${movie.id}`}
          style={{ textDecoration: "none" }}>
          <div className="movie__img">
            {movie.poster_path===null ? <img alt="movie_poster" width="133.33" height="200" src='https://englishforless.com/wp-content/uploads/2014/10/dummy-placeholder-image-400x400.jpg'/>:
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt="movie-name"
              height="200"
            />}
          </div>
        </Link>
        <div className="movie__rating">
          <span>{movie.vote_average * 10}%</span>
        </div>
        <div className="movie__title">
          {type === "TV" && <h4>{movie.name}</h4>}
          <h4>{movie.original_title}</h4>
        </div>
      </div>
    </>
  );
};
/*
<div className='movie__favourite' onClick={()=>click(movie)}>
                {store.liked.map((liked_movie)=>{
                  if(liked_movie.id === movie.id){
                    return(
                      <div className="movie__icon">
                <FavoriteOutlinedIcon style={{fill:"red"}} className="love__icon"/>
                </div>
                    )
                  }
                  else{
                    return(
                    <div className="movie__icon">
                <FavoriteBorderOutlinedIcon className="love__icon"/>
                </div>
                    )
                  }
                })}
                
                
              </div>
*/

export default Card;
