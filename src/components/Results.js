import React from 'react'
import Card from './Card'

function Results({ results, openPopup }) {
if(results){
  return (
        <section className="results">
            {results.map(result => (
                <Card key={result.imdbID} result={result} openPopup={openPopup}/>
        
            ))}
        </section>
        )
    }else{
        return (
            <section className="result">
            <h2 >No movies available with the given name :(</h2>
            </section>
        )
    }
}
export default Results