import { Country } from "./Country";
import { CountrySelected } from "./CountrySelected";

export const Countries = ({countrys, searchCountry, weather}) => {
    const filter = countrys.filter((country) => (country.name.common.toLowerCase().includes(searchCountry)));

    if(filter.length >= 5){
        return 'Too many matches, specify another filter';
    }
    if(filter.length >= 2 && filter.length <= 4) {
        return (
            <CountrySelected filter={filter} />
        )
    }else{
        return <Country filter = {filter} weather = {weather}/>
    }
}