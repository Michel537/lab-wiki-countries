
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import listOfCountries from "../src/countries.json"

function App() {

  const [countries, setCountries] = useState([]);

  
  


  useEffect( () => {
    setCountries( () => {
      const newArr= [...listOfCountries]      
      return newArr;
    });

  },[])

  console.log(countries);


  return (
    <div className="App">

      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
        </div>
      </div>
      
      

    </div>
  );
}

export default App;
