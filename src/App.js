import './App.css';
import React, { useState, useEffect } from 'react';
import {getAllCountrys} from './services/getAllCountrys';
import { FormCountrys } from './components/FormCountrys';
import { Countries } from './components/Countries';

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
      <FormCountrys
      handleChangeInput = {handleChangeInput}
      searchCountry = {searchCountry} 
      />
      <div>
        {
          searchCountry === '' ? <p>Search a Country</p> :
          <Countries
          countrys = {countrys}
          searchCountry = {searchCountry} />
        }
      </div>
    </>
  );
}

export default App;
