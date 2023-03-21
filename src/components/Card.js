import React from 'react'

function Card({ result, openPopup }) {
  return (
    <div className='card' onClick={() => openPopup(result.Title)}>
        <img src={result.Poster} />
        <h4>{result.Title} ({result.Year})</h4>

    </div>
  )
}

export default Card