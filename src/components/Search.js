import React from 'react'

function Search(props) {
  return (
    <section className="searchbox-area" >
        <input 
        type="text" placeholder="Give us a movie title ...." 
        className='searchbox' 
        onChange={props.handleInput}
        onKeyPress={props.search}
        />
    </section>
  )
}

export default Search

//api key : http://www.omdbapi.com/?i=tt3896198&apikey=57a9d72d