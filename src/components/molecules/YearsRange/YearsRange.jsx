import { Grid } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { MonthPicker } from '@mui/x-date-pickers/MonthPicker';
import { YearPicker } from '@mui/x-date-pickers/YearPicker';
const years = 1920;
const minDate = dayjs('1920');
const maxDate = dayjs('2023');

export default function YearsRange() {
  const [date, setDate] = React.useState(dayjs(1920));
  const [date2, setDate2] = React.useState(dayjs(2022));

  return (
    <>
      <h1>
        Years: {date.$y}-{date2.$y}
      </h1>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid
          container
          direction="row"
          flexWrap="nowrap"
          // justifyContent="flex-start"
          // alignItems="flex-start"
          sx={{ maxheight: '30' }}
        >
          <YearPicker
            sx={{ maxheight: '30', innerWidth: '50', maxWidth: '50' }}
            date={date}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(newDate) => setDate(newDate)}
          />

          <YearPicker
            sx={{ maxheight: '30', innerWidth: '50' }}
            date={date2}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(newDate2) => setDate2(newDate2)}
          />
        </Grid>
        {console.log(date2.$y)}
      </LocalizationProvider>
    </>
  );
}
