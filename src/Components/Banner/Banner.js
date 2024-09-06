import React from 'react'
import axios from "../../Axios"
import { API_KEY, baseUrl, imageUrl } from '../../Constants/constants'
import {useEffect, useState} from "react"
import "./Banner.css"
function Banner() {

    const [Movie, setMovie]= useState([])
    useEffect(() => {
        const random = Math.floor(Math.random() * 20);
        axios.get(baseUrl+`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>
        {  console.log(res.data)
            setMovie(res.data.results[random])
        })
    
      
    }, [])
    
  return (
    <div className='banner' 
    style={{backgroundImage:`url(${Movie ? imageUrl + Movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className='title'>{Movie ? Movie.name? Movie.name : Movie.title : ""}</h1>
            <div className='buttons'>
                <button className='button'>Play</button>
                <button className='button'>+List</button>
            </div>
            <p className='desc'>{Movie ? Movie.overview : ""}</p>
            </div>
            <div className='fade'></div>
      
    </div>
  )
}

export default Banner
