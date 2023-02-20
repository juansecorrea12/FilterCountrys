import { useState } from "react";
import { CountryChoose } from "./CountryChoose";

export const CountrySelected = ({filter}) => {
    
    const [infoCountry, setInfoCountry] = useState([]);

    const buttonElement = (e) => {
        const nameCountry = e.target.name;
        const countrySelected = filter.filter(elm => elm.name.common === nameCountry);
        setInfoCountry(countrySelected);
    }
    
    return(
        <>
            {
                filter.map((findCountry, index) => (
                    <div key={index}>
                        <span>{findCountry.name.common}</span>
                        <button type="button" name={findCountry.name.common} onClick={buttonElement}>show</button>
                    </div>
                ))
            }
            <CountryChoose infoCountry={infoCountry} />
        </>
    )
}