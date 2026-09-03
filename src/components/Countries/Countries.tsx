import { use, useState } from "react";
import type { CountriesType } from "../../type";
import Country from "../Country/Country";
import "./Countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountriesType[]>;
}

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  const [visitedCountry, setVisitedCountry] = useState<CountriesType[]>([]);
  const [visitedFlag, setVisitedFlag] = useState<string[]>([]);

  const handleVisitedCountry = (country: CountriesType): void => {
    const exists = visitedCountry.find(
      (c) => c.ccn3.ccn3 === country.ccn3.ccn3,
    );
    if (exists) {
      const remainingCountry = visitedCountry.filter(
        (c) => c.ccn3.ccn3 !== country.ccn3.ccn3,
      );
      setVisitedCountry(remainingCountry);
    } else {
      const newVisiteCountry = [...visitedCountry, country];
      setVisitedCountry(newVisiteCountry);
    }
  };

  const handleVisitedFlag = (flag: string): void => {
    if (visitedFlag.includes(flag)) {
      const remainingFlag = visitedFlag.filter((f) => f !== flag);
      setVisitedFlag(remainingFlag);
    } else {
      const newVisitedFlag = [...visitedFlag, flag];
      setVisitedFlag(newVisitedFlag);
    }
  };
  return (
    <div>
      <h3>Countries: {countries.length}</h3>

      <h3>Visited Country: {visitedCountry.length}</h3>

      <h3>Visited Flag: {visitedFlag.length}</h3>

      <div>
        {visitedFlag.map((flag) => (
          <img className="visitedFlag" src={flag} alt="" />
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
