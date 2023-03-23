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
  const apiurl = process.env.REACT_APP_API_KEY;


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

  const openPopup = (title,year) => {
    axios(apiurl + "&t=" + title + "&y=" + year).then(({data}) => {
      let result = data;
      // console.log(result);
      // console.log(result.id);
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }


  const sortByYear = ()=> {

    let temp = state.results;
    const hyp = "–";
    sortByAlphRev();
    temp.sort((a,b) => {
      if(a.Year.includes(hyp) || b.Year.includes(hyp)){
        return a.Year.substring(1,4) - b.Year.substring(1,4);
      }
      return a.Year - b.Year;
    });
    // let min = temp[0].Year;
    // let max = temp[temp.length-1].Year;
    // console.log(temp, min, max);
    setState(prevState => {
      return { ...prevState, result: temp }
    });
  }


  const sortByAlph = ()=> {

    let temp = state.results;
    temp.sort((a,b) => {
      return a.Title.localeCompare(b.Title);
    });
    console.log(temp);
    setState(prevState => {
      return { ...prevState, result: temp }
    });
  }

  const sortByAlphRev = ()=> {

    let temp = state.results;
    temp.sort((a,b) => {
      return b.Title.localeCompare(a.Title);
    });
    console.log(temp);
    setState(prevState1 => {
      return { ...prevState1, result: temp }
    });
  }
  //Sorting the results

  // const sorting = (e) =>{
  //   let userSortValue = document.getElementById("sort");
  //   let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
  //   return sortValue;
  // }

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
        <Search handleInput={handleInput} search={search} sortByYear={sortByYear} sortByAlph={sortByAlph} sortByAlphRev={sortByAlphRev}/>
        {/* <Filter min={sortByYear.min} max={sortByYear.max} year={} /> */}
        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} exitPopup={exitPopup} /> : false}

      </main>
    </div>
  );
}

export default App;
