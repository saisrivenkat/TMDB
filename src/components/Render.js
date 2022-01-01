import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const RenderData = ({ type }) => {
const [currenttype,setcurrenttype] = useState();
  return (
    <>
      {type.map((movie) => {
        return (
          <Link to={`/movies/${movie.id}`} >
            <div className="movie__content">
              <div className="movie__img">
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movie-name" height="200" />
              </div>
              <div className="movie__rating">
                <span>{movie.vote_average * 10}%</span>
              </div>
              <div className="movie__title">
                <h4>{movie.original_title}</h4>
              </div>
              <div className="movie__releasedate">
                <span>Dec 17,2021</span>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
};
export default RenderData;