export const CountrySelected = ({infoCountry}) => {
    return(
        infoCountry.map((elemento, index) => (
            <div key={index}>
                <p>{elemento.name.common}</p>
            </div>
        ))
        /* <div>
            <h2>{infoCountry.name.common}</h2>
            <p>{infoCountry.capital}</p>
            <p>{infoCountry.population}</p>
            <h2>Languages</h2>
            <ul>
            {Object.values(infoCountry.languages).map((element,index) => (
                <li key={index}>{element}</li>
            ))}
            </ul>
            <img src={infoCountry.flags.png} alt={infoCountry.flags.alt} />
        </div> */
    )
}