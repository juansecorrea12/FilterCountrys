export const Country = ({filter, weather}) => {
    console.log(weather);
    return(
        <>
        {
            filter.map((findCountry, index) => (
                <div key={index}>
                    <h2>{findCountry.name.common}</h2>
                    <p>{findCountry.capital}</p>
                    <p>{findCountry.population}</p>
                    <h2>Languages</h2>
                    <ul>
                    {Object.values(findCountry.languages).map((element,index) => (
                        <li key={index}>{element}</li>
                    ))}
                    </ul>
                    <img src={findCountry.flags.png} alt={findCountry.flags.alt} />
                    <hr></hr>
                    <div>
                        <h2>Weahter in {findCountry.name.common}</h2>
                        <p>tempeture: {}</p>
                    </div>
                </div>
            ))
        }
        </>
    )
}