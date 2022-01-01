/* eslint-disable react/jsx-filename-extension */
import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Detail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
