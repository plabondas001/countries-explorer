import { use } from "react";
import type { CountriesType } from "../../type";
import Country from "../Country/Country";
import "./Countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountriesType[]>;
}

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  return (
    <div>
      <h3>Countries: {countries.length}</h3>

      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
