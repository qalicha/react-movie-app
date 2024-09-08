import React from 'react'
import { useState } from 'react'
import { IoStarOutline } from "react-icons/io5";
const Ratings = ({rateMovie,rating}) => {
    // const[rating,setRating]=useState(null)
    // const [rateColor,setRateColor]=useState(null)
    
const [hover, setHover] = useState(null);
const [totalStars, setTotalStars] = useState(5);
const [clicked,setClicked]=useState(false)

  return (
    <>
    {[...Array(totalStars)].map((star, index) => {
  let currentRating = index + 1;

  return (
    <label key={index}>
      <input
        type="radio"
        name="rating"
        value={currentRating}
        onChange={() => rateMovie(currentRating)}
        
      />
      <span
        className="star"
        style={{
          color:
            currentRating <= (hover||rating) ? "#ffc107" : "#e4e5e9"
        }}
        onMouseEnter={() => setHover(currentRating)}
        onMouseLeave={() => setHover(null)}
        onClick={()=>setClicked(true)}
      >
        &#9733;
      </span>
    </label>
  );
})}
     
    </>
  )
}

export default Ratings