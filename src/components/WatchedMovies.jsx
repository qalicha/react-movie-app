import React from 'react'
import { useState } from 'react';
import Ratings from './Ratings'
import { FaArrowRotateLeft } from "react-icons/fa6";
import { AiTwotoneDelete } from "react-icons/ai";



const WatchedMovies = ({rateMovie,rating,selectedMovie,clicked,handleBack,handleAddMovie,watchedMovie,btnClicked,watched, deleteMovie}) => {
    
    const newRatingArray = watchedMovie.map((movie) => movie.rating);
    
    const newSum = newRatingArray.reduce((a,v) =>  a + v, 0 );
    const avgRating=newSum/watchedMovie.length
    const initialCount=0
   

  return (

    <>

        {clicked? <div className='movie-card'>
            <div onClick={handleBack}><FaArrowRotateLeft /></div>
        <div>
          
            <img src={selectedMovie.Poster}/></div>
        <div><h5>{selectedMovie.Title}</h5>
        <p>{selectedMovie.Year}</p>
        </div>
        <div>
        <Ratings rateMovie={rateMovie} rating={rating}/>
        <button onClick={()=>{handleAddMovie(selectedMovie.imdbID)}}>add</button>
        </div>
       </div>:<div><div className='header1'>
            <p className='header1-title'>watched {watchedMovie.length} movies</p>
            <div><span className='star1'>&#9733;</span><span>{watchedMovie.length>0? avgRating.toFixed(2):initialCount.toFixed(2)}</span></div>
            
        </div>
        
        { btnClicked? watchedMovie.map(e=>{
           return <div key={e.imdbID} className='movie-card' >
              
           <div>
               <img src={e.Poster}/></div>
           <div><h5>{e.Title}</h5>
           <p>{e.Year}</p>
           </div>
           <div className='movie-card1'>
           <div><div className='star1'>&#9733;</div><div>{e.rating}</div></div>
           <div onClick={()=>{deleteMovie(e.imdbID)}}><AiTwotoneDelete /></div>
           </div>
          </div>
        }) 
        :''}
        
        </div>
        }

        
        </>
        

  )
}

export default WatchedMovies