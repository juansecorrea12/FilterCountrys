import './App.css';
import React, { useState, useEffect } from 'react';
import {getAllCountrys} from './services/getAllCountrys';

const App = () => {

  const [countrys, setCountrys] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  
  const hookEffect = () => {
    getAllCountrys()
    .then((countrys) => {
      setCountrys(countrys);
    })
  }
  useEffect(hookEffect, []);

  const handleChangeInput = (event) => {
    setSearchCountry(event.target.value);
  }

  const calculateFilter = () => {
    const filter = countrys.filter((country) => (country.name.common.toLowerCase().includes(searchCountry)));
    if(filter.length >= 5){
      return 'Too many matches, specify another filter';
    }
    if(filter.length >= 2 && filter.length <= 4) {
      return filter.map((findCountry, index) => (
        <div key={index}>
          <p>{findCountry.name.common}</p>
        </div>
      ))
    }else{
      return filter.map((findCountry, index) => (
        <div key={index}>
          <h2>{findCountry.name.common}</h2>
          <p>{findCountry.capital}</p>
          <p>{findCountry.population}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(findCountry.languages).map((element,index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
          <img src={findCountry.flags.png} alt={findCountry.flags.alt} />
        </div>
        
      ))
    }
  }

  return (
    <>
      <form>
        <p>
          <label>Find Countries</label>
          <input type="text" onChange={handleChangeInput} value={searchCountry}/>
        </p>
      </form>
      <div>
        {
          searchCountry === '' ? <p>Search a Country</p> :
          calculateFilter()
        }
      </div>
    </>
  );
}

export default App;
