import React from 'react'

function Result({ result, openPopup }) {
  return (
    <div className='result' onClick={() => openPopup(result.Title)}>
        <img src={result.Poster} />
        <h4>{result.Title} ({result.Year})</h4>

    </div>
  )
}

export default Result