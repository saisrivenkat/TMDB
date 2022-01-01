import React from 'react';
import { useSelector } from 'react-redux';
import { moviedetails } from '../../redux/movies/movieslice';
const MovieDetail_Banner = () => {
  const details = useSelector(moviedetails);
  console.log(details);
  return (
    <div className="detail__banner" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path})` }}>
      <div className="detail__banner__custom_bg">
        <div className="detail__banner__img">
          <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`} alt="movie" />
        </div>
        <div className="detail__banner__content">
          <h1>{details.name ? details.name : details.original_title}</h1>

          <h3>Overview</h3>
          <p>{details.overview}</p>
          {details.name ? null :
            <p style={{ fontWeight: "700" }}>Duration :<span style={{ fontWeight: "300" }}> {details.runtime} m</span></p>}
        </div>
      </div>
    </div>
  )
};

export default MovieDetail_Banner;