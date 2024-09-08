import { useState } from "react";
import { useEffect } from "react";


export function useMovies(){
    const [isLoading, setIsLoading]=useState(true)
    const [movieData, setMovieData] = useState([])

    const apiUrl = 'http://www.omdbapi.com/?s=inception&apikey=69a80ae0';

    useEffect(() => {
  

  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    const newMovieData= userData.Search.map(movie => {
        return {
        ...movie,
        rating: '',
      };
  });
    // setMovieData(userData.Search)
    setMovieData(newMovieData)
    setIsLoading(false)
  })
  .catch(error => {
    console.error('Error:', error);
  });
      }, []);

      return{movieData,isLoading}

}