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
        <div className="list-countrys">
            {
                filter.map((findCountry, index) => (
                    <div key={index}>
                        <span>{findCountry.name.common}</span>
                        <img src={findCountry.flags.png} alt={findCountry.flags.alt}></img>
                        <button type="button" name={findCountry.name.common} onClick={buttonElement}>Show Info</button>
                    </div>
                ))
            }
            
        </div>
        <CountryChoose infoCountry={infoCountry} />
        </>
    )
}