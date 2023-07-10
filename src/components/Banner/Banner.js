import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import './Banner.css'

function Banner() {

  const [movie, setMovie] = useState()


  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      console.log(randomMovie);

      setMovie(randomMovie);
    })
  }, [])

  return (
    <div
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}}
     className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title:""}</h1>
        <div className='banner_button'>
          <button className='button'>play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie? movie.overview:""} </h1>
        <div className="fade_bottom"></div>
      </div>
    </div>
  )
}

export default Banner
