import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES_OF_AUTHORS } from '../queries';


const CountrySearchField = ({ setCountrySearch }) => {
  useQuery(GET_COUNTRIES_OF_AUTHORS, {
    onCompleted: (data) => {
        setCountries(data.getCountriesFromAuthors)
    }
  });
  const [countries, setCountries] = useState([])
  return (
    <Autocomplete
      id="country-select"
      size="small"
      sx={{ width: "250px" }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option}
      onChange={(e) => setCountrySearch(e.target.innerText)}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
            
          {...params}
          
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
export default CountrySearchField;
