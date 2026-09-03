import { useState } from "react";
import type { CountriesType } from "../../type";
import "./Country.css";

export interface CountryProps {
  country: CountriesType;
}

export default function Country({ country }: CountryProps) {
  const [visit, setVisit] = useState<boolean>(false);

  const handleVisit = () => {
    setVisit(!visit);
  };

  return (
    <div className={`country ${visit ? "country-visited" : ""}`}>
      <h1>{country.name.common}</h1>
      <img src={country.flags.flags.png} alt="" />
      <h3>Capital: {country.capital.capital}</h3>
      <h4>Region: {country.region.region}</h4>
      <p>population: {country.population.population}</p>
      <button onClick={handleVisit} className="btn">
        {visit ? "Visited" : "Mark as Visited"}
      </button>
    </div>
  );
}
