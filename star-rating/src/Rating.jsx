import React, { useState } from 'react'
import Star from "./Star"

const Rating = ({ ratingDefaultValue }) => {

  const [rating, setRating] = useState(ratingDefaultValue);
  const [defaultValue, setdefaultValue ] = useState(ratingDefaultValue);

  const onChange = (value) => {
       setdefaultValue(value);
       setRating(value);
  }

  return (
    <div className="rating">
      {
        [1, 2,, 3, 4, 5].map((value) => {
          return <Star key={value} value={value} ratingDefaultValue={defaultValue} rating={rating} onChange={onChange} setRating={setRating} />
        })
      }
    </div>
  )
}

export default Rating
