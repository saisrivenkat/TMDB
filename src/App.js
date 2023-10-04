/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './styles/main.scss';
import Header from './components/header/Header';
import Home from './components/index';
import Detail from './components/moviedetail/index';
import TvDetail from './components/moviedetail/tvindex';
import Login from './components/Login';
import Register from './components/Register';
import 'react-toastify/dist/ReactToastify.css';
import Liked from './components/Favourite';
export const Appcontext = React.createContext(null);
function App() {
  const [movies,setmovies] = useState([]);
  const[tvShows,settvShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const[curr,setcurr] = useState('movies');
  const[user,setuser] = useState()
  const[liked,setliked]= useState([])
  const [res,setres] = useState([]) // query results
  const [scifi,setscifi] = useState([]) //scifi movies
  const [animation,setanimation] = useState([])

  const fetch_movies=()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&page=1`)
    .then((res)=>res.json())
    .then((data)=>{
      setmovies(data.results);
    })
    .catch((err)=>{
      console.log(err);
    })  
  }

  const fetch_scifimovies=async()=>{
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&with_genres=878';
    const res = await fetch(url);
    const result = await res.json();
    setscifi(result.results);
  }
  
  const fetch_tvShows=async()=>{
    const url = 'https://api.themoviedb.org/3/tv/popular?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&page=1';
    const res = await fetch(url);
    const result = await res.json();
    settvShows(result.results);
  }
  const fetch_animations =async()=>{
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&with_genres=16';
    const res = await fetch(url);
    const result = await res.json();
    setanimation(result.results);
  }
  const fetch_result=async()=>{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
    const res = await fetch(url);
    const result = await res.json();
    setres(result.results);
  }
  useEffect(()=>{
    fetch_result()
  },[searchTerm])

  useEffect(()=>{
    fetch_movies()
    fetch_tvShows()
    fetch_scifimovies()
    fetch_animations()
    const user = localStorage.getItem('user')
    console.log(user)
    if(user!==null){
      setuser(JSON.parse(user))
    }
    //setuser(JSON.parse(user));
  },[])
  const store={
    movies,setmovies,tvShows,settvShows,searchTerm,setSearchTerm,curr,setcurr,user,setuser,liked,setliked,res,scifi,animation
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Appcontext.Provider value={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home   />} />
          <Route path="/movies/:id" element={<Detail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
        </Appcontext.Provider>
      </div>
    </BrowserRouter>
  );
}
//https://api.themoviedb.org/3/discover/movie?api_key=2cd801dd5229267983db8c82fe3a7ef4&language=en-US&with_genres=878 -scifi movies
export default App;
