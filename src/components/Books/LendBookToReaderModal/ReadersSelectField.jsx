import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useQuery } from '@apollo/client';
import { GET_READERS } from '../../Readers/queries';


const ReadersSelectField = ({ setReaderId }) => {
  const [readers, setReaders] = useState([]);
  useQuery(GET_READERS, {
    onCompleted: (data) => {
        let newData = {};
        for (const reader of data.getReaders.readers) {
          newData[reader.name] = reader.id;
        }
        setReaders(newData)
    }
  });
  
  const handleOnChange = (e) => {
    let readerName = e.target.innerText;
    let readerId = readers[readerName];
    setReaderId(readerId)
  }
  return (
    <Autocomplete
      id="readers-select"
      size="small"
      sx={{ width: "250px", marginTop: 3, }}
      options={Object.keys(readers)}
      autoHighlight
      getOptionLabel={(option) => option}
      onChange={handleOnChange}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
            
          {...params}
          
          label="Lend to:"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
export default ReadersSelectField;
