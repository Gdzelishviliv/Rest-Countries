import * as C from './styles';
import { useEffect, useState } from 'react';
import Search from '../../Components/Input/Search';
import { api } from '../../api';
import { CountriesTS } from '../../Types/Countries';
import CountryItem from '../../Components/CountryItem';

export const Countries = () => {
    const [countries, setCountries] = useState<CountriesTS[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getAllCountries();
    }, []);

    const getAllCountries = async () => {
        setLoading(true);
        try {
            const countriesData = await api.getCountries();
            setCountries(countriesData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching countries:', error);
            setLoading(false);
        }
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchQuery)
    );

    return (
        <C.CountiesArea>
            <Search onChange={handleSearch} value={searchQuery} />
            <div className='countries'>
                {loading ? (
                    <div className=''>loading...</div>
                ) : (
                    filteredCountries.map(item => (
                        <CountryItem
                            key={item.name} // Add key prop for React rendering
                            name={item.name}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            flag={item.flags.png}
                        />
                    ))
                )}
            </div>
        </C.CountiesArea>
    );
};
