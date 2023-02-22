import './Styles.css';
import React, { useState, useEffect } from 'react';
import {getAllCountrys} from './services/getAllCountrys';
import { FormCountrys } from './components/FormCountrys';
import { Countries } from './components/Countries';

const App = () => {

  const [countrys, setCountrys] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  
  const countryEffect = () => {
    getAllCountrys()
    .then((countrys) => {
      setCountrys(countrys);
    })
  }
  useEffect(countryEffect, []);

  const handleChangeInput = (event) => {
    setSearchCountry(event.target.value);
  }

  return (
    <>
    <h1 className='title'>Country Search Engine</h1>
    <div className='container'>
      <FormCountrys
      handleChangeInput = {handleChangeInput}
      searchCountry = {searchCountry} 
      />
      <div className='container-result'>
        {
          searchCountry === '' ? <p className='text-search'>Type into the input to start searching...</p> :
          <Countries
          countrys = {countrys}
          searchCountry = {searchCountry} 
          />
        }
      </div>
    </div>
    </>
  );
}

export default App;
