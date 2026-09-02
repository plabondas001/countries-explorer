import type { CountriesType } from "../../type";
import "./Country.css";

export interface CountryProps {
  country: CountriesType;
}

export default function Country({ country }: CountryProps) {
  return (
    <div className="country">
      <h1>{country.name.common}</h1>
      <img src={country.flags.flags.png} alt="" />
      <h3>Capital: {country.capital.capital}</h3>
      <h4>Region: {country.region.region}</h4>
      <p>population: {country.population.population}</p>
    </div>
  );
}
