import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BirthDatePicker = ({birthDate, setBirthDate, handleChange}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Birth date"
        value={birthDate}
        onChange={(newValue) => setBirthDate(newValue)}
        renderInput={(params) => <TextField sx={{
          marginTop: 3
        }} {...params}  />}
        
      />
    </LocalizationProvider>
  );
}

export default BirthDatePicker;
