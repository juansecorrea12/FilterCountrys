import axios from 'axios';

export const getAllCountrys = () => {
    return axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      const { data } = response;
      return data;
    }).catch(err => console.warn('No se ha efectuado la conexión con el servidor', err));
    
}