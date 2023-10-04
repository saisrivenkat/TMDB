/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Banner from './MovieDetail_Banner';
import { fetchTvShowDetails } from '../../redux/movies/movieslice';

function Index() {
  const {id} = useParams();
 
  const[details,setdetails]  = useState({})
 const[recommendations,setrecommendations] = useState();

   const fetchTvShowDetails = async() => {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US`;
    const res = await fetch(url);
    const result = await res.json();
    setdetails( result);
    console.log(result)
  };
  const getTvRecommendations=async()=>{
    const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&page=1`;
    const res = await fetch(url);
    const result = await res.json();
    setrecommendations(result.results);
    console.log("recommendations",result.results)
  }

  useEffect(() => {
    getTvRecommendations()
    fetchTvShowDetails()
    
  }, [id]);
  return (
    <>
    <Banner details={details} similar={recommendations} type="TV" />
    </>
  );
}
export default Index;
