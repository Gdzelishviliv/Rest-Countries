import { useEffect, useState } from "react";
import * as C from "./country";
import { useParams, Link } from "react-router-dom";
import { CountryTs } from "../../Types/Country";
import SingleCountry from "../../Components/SingleCountry/Singlecountry";
import { api } from "../../api";

export const CountryPage = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryTs[]>([]);

  useEffect(() => {
    if (name) {
      getCountry(name);
    }
  }, [name]);

  const getCountry = async (param: string) => {
    setLoading(true);
    let country = await api.getCountry(param);
    setCountry(country);
    setLoading(false);
  };

  return (
    <C.CountryPage>
      <div className="container">
        <Link to="/" className="back--button">
          Back
        </Link>
        {loading && <div className="loading">loading...</div>}
        {!loading &&
          country.map((item: CountryTs) => (
            <SingleCountry
              key={item.name}
              flag={item.flags.png}
              name={item.name}
              nativeName={item.nativeName}
              region={item.region}
              subregion={item.subregion}
              capital={item.capital}
              topLevelDomain={item.topLevelDomain[0]}
              currencie={item.currencies && item.currencies}
              languages={item.languages}
              borders={item.borders}
              population={item.population}
            />
          ))}
      </div>
    </C.CountryPage>
  );
};
