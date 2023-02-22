import axios from 'axios';

export const getWeatherCountry = async(country) => {
    const URL_BASE = 'http://api.weatherstack.com/';
    const URL_COMPLETE = URL_BASE + 'current?access_key=' + process.env.REACT_APP_WEATHER_API_KEY + '&query=' + country;
    console.log(URL_COMPLETE);

        return await axios.get(URL_COMPLETE)
        .then(response => {
        const {data} = response;
        return data 
        }).catch(err => console.warn('la comunicación con el servidor no ha sido posible', err));
}