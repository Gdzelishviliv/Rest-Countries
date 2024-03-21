import * as C from './input';
import React, { ChangeEvent } from 'react';

interface SearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search: React.FC<SearchProps> = ({ onChange, value }) => {
  return (
    <C.InputArea>
      <input type="text" placeholder='Search for a country' onChange={onChange} value={value} />
      <select>
        <option value="Filter by Region" disabled >Filter by Region</option>
      </select>
    </C.InputArea>
  )
}

export default Search;
