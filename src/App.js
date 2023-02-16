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
          countrys
          .filter((country) => (country.name.common.toLowerCase().includes(searchCountry)))
          .map((findCountry, index) => (
            <p key = {index}>{findCountry.name.common}</p>
          ))
        }
      </div>
    </>
  );
}

export default App;
