import React from 'react'
const MovieLists = ({updateMovieData,movieData,isLoading,handleClick}) => {
 
  
    
  return (
    <div>  
       {isLoading?"":movieData.map((e,i)=>{
        return <div key={e.imdbID} className='movie-card' onClick={()=>handleClick(e.imdbID)}>
        <div><img src={e.Poster}/></div>
        <div><h5>{e.Title}</h5>
        <p>{e.Year}</p>
        </div>
       </div>
       }) }       
        
    </div>
  )
}

export default MovieLists