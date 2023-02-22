
export const CountryChoose = ({infoCountry}) => {
    return(
        <>
            {
            infoCountry.map((elemento, index) => (
                <div key={index} className="country-select-container">
                    <div className="country-select-title">
                        <h2>{elemento.name.common}</h2>
                    </div>
                    <div className="country-select-body">
                        <div> 
                            <p>Continent</p>
                            <span><strong>{elemento.continents[0]}</strong></span>
                        </div>
                        <div>
                            <p>Capital</p>
                            <span><strong>{elemento.capital}</strong></span>
                        </div>
                        <div> 
                            <p>Population</p>
                            <span><strong>{elemento.population}</strong></span>
                        </div>
                        <div className="country-select-languages"> 
                            <p>Languages</p>
                            <ul>
                            {Object.values(elemento.languages).map((element,index) => (
                                <li key={index}><strong>{element}</strong></li>
                            ))}
                            </ul>
                        </div>
                        <div> 
                            <p>Coat of arms</p>
                            <img src={elemento.coatOfArms.png} alt={elemento.coatOfArms.svg} />
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}