import React from 'react'

function Popup({selected, exitPopup}) {
  return (
    <section className='popup'>
        <div className='content'>
            <h2>{selected.Title} <span>{selected.Yead}</span></h2>
            <p className='rating'>Rating : {selected.imdbRating}</p>
            <div className='plot'>
                <img src={selected.Poster} />
                <p>{selected.Plot}</p>
            </div>
            <button className='close' onClick={exitPopup}>Close</button>
        </div>
    </section>
  )
}

export default Popup