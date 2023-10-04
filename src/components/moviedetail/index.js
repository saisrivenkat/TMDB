/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Banner from './MovieDetail_Banner';


function Index() {
  const {id} = useParams();
const dispatch = useDispatch();
const[details,setdetails]  = useState({})
const[recommendations,setrecommendations] = useState();
console.log(id)
 const fetchMovieShowDetails = async() => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US`;
  const res = await fetch(url);
  const result = await res.json();
  setdetails( result);
 
};
const getMovieRecommendations=async()=>{
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&page=1`;
  const res = await fetch(url);
  const result = await res.json();
  setrecommendations(result.results);
  console.log("recommendations",result.results)
}
useEffect(() => {
  //dispatch(fetchTvShowDetails(params.id));
  fetchMovieShowDetails()
  getMovieRecommendations();
  //console.log(params);
  
}, [id]);
  return (
    <>
    <Banner details={details} similar={recommendations} />
    </>
  );
}
export default Index;
