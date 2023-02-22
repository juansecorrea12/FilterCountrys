import { Country } from "./Country";
import { CountrySelected } from "./CountrySelected";

export const Countries = ({countrys, searchCountry}) => {
    const filter = countrys.filter((country) => (country.name.common.toLowerCase().includes(searchCountry)));

    if(filter.length === 0 ){
        return <p>There are not countrys with than name</p>
    }else 
    if(filter.length >= 2 && filter.length <= 4) {
        return (
            <CountrySelected filter={filter} />
        )
    }else if(filter.length >= 5){
        return <p>Too many matches, specify another filter</p>
    }
    else{
        return <Country filter = {filter}/>
    }
}