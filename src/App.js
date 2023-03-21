import React, { useState } from "react";
import axios from "axios";

import Search from './components/Search';
import Results from './components/Results';
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    sQuery: "",
    results: [],
    selected : {}
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=57a9d72d";


  const search = (e) => {
    if (e.key === "Enter") {
      //Concatenating the apiurl with the search query
      axios(apiurl + "&s=" + state.sQuery).
      then(({data}) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    }
  }

// Handling inputs character by character
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, sQuery: s }
    });
    // console.log(state.sQuery);
  }

  const openPopup = title => {
    axios(apiurl + "&t=" + title).then(({data}) => {
      let result = data;
      // console.log(result);
      // console.log(result.id);
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const exitPopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header className="App">
        <h1>CineFans</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>

        <Results results={state.results} openPopup={openPopup}/>

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} exitPopup={exitPopup} /> : false}

      </main>
    </div>
  );
}

export default App;
