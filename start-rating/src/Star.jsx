import React from 'react'

const Star = ({ value, ratingDefaultValue, rating, onChange, setRating }) => {
  let isActive = value <= rating;
  
  const handlerclick = () => {
    onChange(value);
  }

  const handlerHover = () => {
      setRating(value);
  }

  const handlerLeave = () => {
      setRating(ratingDefaultValue);
  }

  return (
    <div className="star" onClick={handlerclick} onMouseEnter={handlerHover} onMouseLeave={handlerLeave}>
        <svg
          width={30} height={30}
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--emojione"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
            fill={isActive ? "#ffce31" : "#fff"}
          />
       </svg>
    </div>
  )
}

export default Star
