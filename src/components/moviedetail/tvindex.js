/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Banner from './MovieDetail_Banner';
import { fetchTvShowDetails } from '../../redux/movies/movieslice';

function Index() {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTvShowDetails(params.id));
    console.log(params);
  }, [params]);
  return (
    <Banner />
  );
}
export default Index;
