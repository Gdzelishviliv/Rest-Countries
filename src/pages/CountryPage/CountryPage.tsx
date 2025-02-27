import { useEffect, useState } from "react";
import * as C from "./country";
import { useParams, Link } from "react-router-dom";
import { CountryTs } from "../../Types/Country";
import SingleCountry from "../../Components/SingleCountry/Singlecountry";
import { api } from "../../api";

export const CountryPage = () => {
  const { name, code } = useParams();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryTs | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (code) {
      fetchCountryByCode(code);
    } else if (name) {
      fetchCountryByName(name);
    }
  }, [name, code]);

  const fetchCountryByName = async (param: string) => {
    setLoading(true);
    setError(false);
    try {
      const data = await api.getCountry(param);
      console.log("API Response (by name):", data);

      if (data && data.length > 0) {
        setCountry(data[0]);
      } else {
        setError(true);
        setCountry(null);
      }
    } catch (error) {
      console.error("Error fetching country:", error);
      setError(true);
    }
    setLoading(false);
  };

  const fetchCountryByCode = async (param: string) => {
    setLoading(true);
    setError(false);
    try {
      const data = await api.getCountryByCode(param);
      console.log("API Response (by code):", data); 

      if (data && typeof data === "object") {
        setCountry(data);
      } else {
        setError(true);
        setCountry(null);
      }
    } catch (error) {
      console.error("Error fetching country:", error);
      setError(true);
    }
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error || !country) return <p>Country not found.</p>;
  console.log({ country });

  return (
    <C.CountryPage>
      <div className="container">
        <Link to="/" className="back--button">
          Back
        </Link>

        <SingleCountry
          key={country?.name || "default"}
          flag={country?.flags?.png || "https://via.placeholder.com/150"}
          name={country?.name || "Unknown"}
          nativeName={country?.nativeName || "N/A"}
          region={country?.region || "N/A"}
          subregion={country?.subregion || "N/A"}
          capital={country?.capital || "N/A"}
          topLevelDomain={country?.topLevelDomain?.[0] || "N/A"}
          currencie={country?.currencies || []}
          languages={country?.languages || []}
          borders={country?.borders || []}
          population={country?.population}
        />
      </div>
    </C.CountryPage>
  );
};
