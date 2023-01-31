import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../../../Authors/queries';


const BookAuthorSelectField = ({ authorId, setAuthorId }) => {
  console.log(`authorId ${authorId}`)
  useQuery(GET_AUTHORS, {
    onCompleted: (data) => {
        let newData = {};
        let sortedAuthors = [...data.getAuthors.authors];
        sortedAuthors.sort((first, second) => {
          let firstName = first.name.toUpperCase();
          let secondName = second.name.toUpperCase();
          if (firstName < secondName) {
            return -1
          } else if (firstName > secondName) {
            return 1
          } else {
            return 0
          }
        })
        for (const author of sortedAuthors) {
          newData[author.name] = author.id;
        }
        setAuthors(newData)
    }
  });
  const [authors, setAuthors] = useState([]);
  const handleOnChange = (e) => {
    let authorName = e.target.innerText;
    let authorId = authors[authorName];
    setAuthorId(authorId)
  }
  return (
    <Autocomplete
      id="authors-select"
      size="small"
      sx={{ width: "250px",  }}
      options={Object.keys(authors)}
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
          error={authorId === ""}
          label="Book Author:"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
export default BookAuthorSelectField;
