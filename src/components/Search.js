import React from 'react'


function Search({ handleInput, search, sortByYear, sortByAlph, sortByAlphRev}) {
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
        {/* <form action="#">
          <label htmlFor="sort"></label>
            <select >            
            <option value="lowest" onClick={sortByRating}>Rating</option>
            
            <option value="highest">Price (highest)</option>
            <option value="a-z">Price (A-Z)</option>
            <option value="z-a">Price (Z-A)</option>
            </select>
        </form> */}
    </section>
  )
}

export default Search