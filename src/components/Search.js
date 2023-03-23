import React from 'react'


function Search({ handleInput, search, sortByYear, sortByAlph, sortByAlphRev }) {
  return (
    <section className="searchbox-area" >
        <input 
        type="text" placeholder="Give us a movie title ...." 
        className='searchbox' 
        onChange={handleInput}
        onKeyPress={search}
        />
      <div className='sort'>
      <button className="close sort sortB" onClick={sortByYear}>Year</button>
      <button className="close sort sortB" onClick={sortByAlph}>A-Z</button>
      <button className="close sort sortB" onClick={sortByAlphRev}>Z-A</button>
      </div>
    </section>
  )
}

export default Search