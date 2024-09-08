import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useMovies } from '../../useMovies';
import MovieLists from './MovieLists'
import WatchedMovies from './WatchedMovies'
const Body = () => {
  const [rating, setRating] = useState(null);
    const {movieData,isLoading}=useMovies()
    const [selectedMovie,setSelectedMovie]=useState({})
    const [btnClicked,setBtnClicked]=useState(false)
    const [watchedMovie,setWatchedMovie]=useState(()=>{
      const initialValue=JSON.parse(localStorage.getItem('watched'))
      setBtnClicked(true)
      return initialValue
    })
    const [clicked,setClicked]=useState(false)
   
    const [watched,setWatched]=useState(false)
  const [title,setTitle]=useState(' movie app')
  
 


    useEffect(()=>{
      
      document.title = title;


    },[title])

    useEffect(()=>{
      
      localStorage.setItem('watched',JSON.stringify(watchedMovie))


    },[watchedMovie])

    

    function handleClick(id){
      const found = movieData.find((element) => element.imdbID===id);
      
      let isWatched = watchedMovie.some( movie => movie.imdbID === id)
      
      if(isWatched){
        alert(`you have already watched ${found.Title}`)

        
        setWatched(true)
      }
      else{
       
        setSelectedMovie(found)
        setClicked(true)
        setRating(null)
        setTitle(found.Title)
        
      }

      
    }
    function handleBack(){
       
        setClicked(false)
        setTitle('movie app')
      
    
    }
    function handleAddMovie(id){
        const found = movieData.find((element) => element.imdbID===id);
      
      setWatchedMovie( [ 
      ...watchedMovie, 
      
      {
        ...found,
        rating:rating
      } 
    ])
      
      
        setBtnClicked(true)
        setClicked(false)
        setTitle('movie app')  
    }
    function deleteMovie(id){
        setWatchedMovie(
            watchedMovie.filter(a => a.imdbID!==id)
        )
       
    }
    function rateMovie(currentRating){
      setRating(currentRating)
   }

  
  return (
    <div className='body-component'>
        <MovieLists  isLoading={isLoading} movieData={movieData} handleClick={handleClick} />
        <WatchedMovies rateMovie={rateMovie} rating={rating} deleteMovie={deleteMovie} clicked={clicked} selectedMovie={selectedMovie} handleBack={handleBack} handleAddMovie={handleAddMovie} watchedMovie={watchedMovie} btnClicked={btnClicked} watched={watched}/>
    </div>
  )
}

export default Body