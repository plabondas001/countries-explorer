import { Suspense } from "react";
import "./App.css";
import type { CountriesType } from "./type";
import Countries from "./components/Countries/Countries";

// Step-1: Create a Promise to load Data
const countriesPromise = async (): Promise<CountriesType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <h2>World on the go...</h2>

      <Suspense fallback = {<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise()}/>
      </Suspense>
    </>
  );
}

export default App;
