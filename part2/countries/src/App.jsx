import { useState, useEffect } from "react";
import service from "./service/service";

const Result = ({ countries }) => {
  if (countries.length === 1) {
    const country = countries[0];
    return (
      <>
        <h1>{country.name.common}</h1>
        capital {country.capital}
        <br />
        area {country.area}
        <h2>languages:</h2>
        <ul>
          {Object.entries(country.languages).map((entry) => (
            <li>{entry[1]}</li>
          ))}
        </ul>
        <h1>{country.flag}</h1>
      </>
    );
  } else {
    return (
      <>
        {countries.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))}
      </>
    );
  }
};

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    service.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const searchResult = countries
    .filter((e) => e.name.common.indexOf(filter) !== -1)
    .slice(0, 10)
    .sort();
  return (
    <>
      find countries{" "}
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <Result countries={searchResult} />
    </>
  );
}

export default App;
