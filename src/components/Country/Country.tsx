import type CountryType from "../../type"
import "./Country.css"

export interface CountryPropType {
    country: CountryType
}
export default function Country({ country }: CountryPropType) {

    return (
            <div className="country-child">
                <h2>{country.name.common}</h2>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                <h3>Population: {country.population.population}</h3>
                <h3>Capital: {country.capital.capital.join(", ")}</h3>
                <button className="btn">visited</button>
            </div>
    )
}