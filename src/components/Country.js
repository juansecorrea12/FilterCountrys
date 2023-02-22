// import { getWeatherCountry } from "../services/getWeatherCountry";
// import { useState, useEffect } from "react";

export const Country = ({filter}) => {
    // console.log(filter, 'filter*******--------******');
    // const [weather, setWeather] = useState([]);

    // const weatherEffect = () => {
    //     getWeatherCountry(filter[0].name.common)
    //     .then((weather) => {
    //       setWeather(weather)
    //     })
    //   }
    // useEffect(weatherEffect, []);

    // console.log(weather, 'weather----------********');

    return(
        <>
        {
            filter.map((findCountry, index) => (
                <div key={index} className="country-select-container">
                    <div className="country-select-title">
                        <h2>{findCountry.name.common}</h2>
                    </div>
                    <div className="country-select-body">
                        <div> 
                            <p>Continent</p>
                            <span><strong>{findCountry.continents[0]}</strong></span>
                        </div>
                        <div>
                            <p>Capital</p>
                            <span><strong>{findCountry.capital}</strong></span>
                        </div>
                        <div> 
                            <p>Population</p>
                            <span><strong>{findCountry.population}</strong></span>
                        </div>
                        <div className="country-select-languages"> 
                            <p>Languages</p>
                            <ul>
                            {Object.values(findCountry.languages).map((element,index) => (
                                <li key={index}><strong>{element}</strong></li>
                            ))}
                            </ul>
                        </div>
                        <div> 
                            <p>Coat of arms</p>
                            <img src={findCountry.coatOfArms.png} alt={findCountry.coatOfArms.svg} />
                        </div>
                    </div>
                    {/* <hr></hr>
                    <div>
                        <h2>Weather in {findCountry.name.common}</h2>
                        {
                            console.log([arrElementWeather][0])
                            Object.values(weather)[2].map((element, index) => (
                                <p>tempeture: {element.temperature}</p>       
                            ))
                        }
                        <p>Temperature: {weather['current']}</p>
                    </div> */}
                </div>
            ))
        }
        </>
    )
}