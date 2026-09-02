import "./App.css";
import type { CountriesType } from "./type";

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
    </>
  );
}

export default App;
