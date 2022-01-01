import React, { useEffect } from 'react';
import Banner from './MovieDetail_Banner';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../redux/movies/movieslice';
import { useDispatch } from 'react-redux';
const Index = () => {
  let params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetails(params.id));
    console.log(params)
  }, [params])
  return (
    <>
      <Banner />
    </>
  )
};
export default Index;