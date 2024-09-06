import React from 'react'
import axios from 'axios';
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar';
import Rowposter from '../Components/Rowposters/Rowposter';
import { API_KEY } from '../Constants/constants';
import { action, comedy, originals } from '../urls';
import { useEffect, useState } from 'react';


function Home() {
    const [Genres, setGenres] = useState([])
  useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`).then((res)=>{
    setGenres(res.data.genres)})

  },[])
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowposter title="Netflix Originals" url={originals} />
      {
      Genres.map((genre)=>{
        return(
        <Rowposter title={genre.name} url={`/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`} isSmall />
      )})
      
      }
    </div>
  )
}

export default Home
