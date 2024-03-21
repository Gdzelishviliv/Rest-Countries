import { Link } from "react-router-dom";
import * as C from "./styles";
import { CountryItemTS } from "../../Types/Countryitem";

const CountryItem = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryItemTS) => {
  return (
    <C.CountryItem>
      <Link to={`/country/${name}`}>
        <div className="img--area">
          <img src={flag} alt={`bandeira do Pais:${name}`}/>
        </div>
        <div className="data--area">
            <p className="country--name">{name}</p>
            <p>Population:<span>{population}</span></p>
            <p>Region:<span>{region}</span></p>
            <p>Capital:<span>{capital}</span></p>
        </div>
      </Link>
    </C.CountryItem>
  )
};

export default CountryItem;
