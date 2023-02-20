import { useState } from "react";
import { Country } from "./Country";
import { CountrySelected } from "./CountrySelected";

export const Countries = ({countrys, searchCountry}) => {

    const [infoCountry, setInfoCountry] = useState([]);
    const filter = countrys.filter((country) => (country.name.common.toLowerCase().includes(searchCountry)));
    
    const buttonElement = (e) => {
        const nameCountry = e.target.name;
        const countrySelected = filter.filter(elm => elm.name.common === nameCountry);
        setInfoCountry(countrySelected);
    }

    if(filter.length >= 5){
        return 'Too many matches, specify another filter';
    }
    if(filter.length >= 2 && filter.length <= 4) {
        return filter.map((findCountry, index) => (
                <div key={index}>
                    <span>{findCountry.name.common}</span>
                    <button type="button" name={findCountry.name.common} onClick={buttonElement}>show</button>
                    {
                        <CountrySelected infoCountry={infoCountry} />
                    }
                </div>
        ))
    }else{
        return <Country filter = {filter}/>
    }
}