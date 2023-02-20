import './App.css';
import React, { useState, useEffect } from 'react';
import {getAllCountrys} from './services/getAllCountrys';
import { getWeatherCountry } from './services/getWeatherCountry';
import { FormCountrys } from './components/FormCountrys';
import { Countries } from './components/Countries';

const App = () => {

  const [countrys, setCountrys] = useState([]);
  const [weather, setWeather] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  
  const countryEffect = () => {
    getAllCountrys()
    .then((countrys) => {
      setCountrys(countrys);
    })
  }
  const weatherEffect = () => {
    getWeatherCountry(searchCountry)
    .then((weather) => {
      setWeather(weather)
    })
  }
  useEffect(countryEffect, []);
  useEffect(weatherEffect, [searchCountry]);

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
          searchCountry = {searchCountry}
          weather = {weather} 
          />
        }
      </div>
    </>
  );
}

export default App;
