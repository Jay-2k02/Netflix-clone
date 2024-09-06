import React from 'react'
import axios from "../../Axios"
import { API_KEY, baseUrl, imageUrl } from '../../Constants/constants'
import {useEffect, useState} from "react"
import "./Rowposters.css"
import Youtube from 'react-youtube'

function Rowposter(props) {
    const [Movies, setMovies] = useState([])
    const [YouId,setYouId]= useState("")

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
    useEffect(() => {
        axios.get(baseUrl+ props.url).then((res)=>{
            setMovies(res.data.results)

        })
      }, [])
      
      const handleClick= (id)=>{

        axios.get(baseUrl+`/movie/${id}/videos?api_key=c8e5cce4b12c4bdffdfb13395897da22`).then((res)=>{
            setYouId(res.data.results[0])})
            .catch(function (error) {
                console.log(error);
              })

      }
  return (
    
    <div className='poster'>
      <h2 className='title'>{props.title}</h2>
      <div className='row'>
      {
        Movies.map((Movie)=>
        {
            return(
      
      <img onClick={()=>{handleClick(Movie.id)}} className={props.isSmall? 'smallPoster':'posters'} src={`${Movie ? imageUrl +  Movie.poster_path : ""}`}></img>
      
            )
        }
        )
      
      }
      </div>
      {
        YouId ? <div><div className='topbar'><button className='close' onClick={()=>setYouId(null)}>x</button></div><Youtube opts={opts} videoId={YouId.key}/></div> : ""
      }
    </div>
  )
}

export default Rowposter
