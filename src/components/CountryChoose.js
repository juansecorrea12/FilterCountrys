
export const CountryChoose = ({infoCountry}) => {
    return(
        infoCountry.map((elemento, index) => (
            <div key={index}>
                <h2>{elemento.name.common}</h2>
                <p>{elemento.capital}</p>
                <p>{elemento.population}</p>
                <h2>Languages</h2>
                <ul>
                {Object.values(elemento.languages).map((element,index) => (
                    <li key={index}>{element}</li>
                ))}
                </ul>
                <img src={elemento.flags.png} alt={elemento.flags.alt} />
            </div>
        ))
    )
}