import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import React,{useState,useEffect} from 'react';
import MovieInfor from './components/MovieInfor';
import Category from './components/Category';
import SearchFunction from './components/Search';
import Footer from './components/Footer';
import Xemphim from './components/Xemphim';


function App() {
  const [movies, setMovies]=useState([]);
  useEffect(()=>{
    fetch("https://63fb1deb4e024687bf724007.mockapi.io/data_videos")
    .then(reponse=>reponse.json())
    .then(data=>setMovies(data))
  },[]);
  
    
  return (
    <BrowserRouter>
      <div className="App">
        <Header movies={movies} />
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/thong-tin/*" element={<MovieInfor movies={movies} />} />
          <Route path="/the-loai/*" element={<Category movies={movies} />} />
          <Route path="/tim-kiem/*" element={<SearchFunction movies={movies} />} />
          <Route path="/xem-phim/*" element={<Xemphim movies={movies} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
