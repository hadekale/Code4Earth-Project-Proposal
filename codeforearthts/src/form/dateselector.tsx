"use client";

import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";



const DateTimePickerComponent = ({ onDateTimeChangeStart, onDateTimeChangeEnd }) => {
  const [valueStart, setValueStart] =  React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  const [valueEnd, setValueEnd] =  React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  const handleDateChangeStart = (valueStart: React.SetStateAction<dayjs.Dayjs | null>) => {
    setValueStart(valueStart);
    // Pass the selected date to the parent component
    onDateTimeChangeStart(valueStart);
  };
  const handleDateChangeEnd = (valueEnd: React.SetStateAction<dayjs.Dayjs | null>) => {
    setValueEnd(valueEnd);
    // Pass the selected date to the parent component
    onDateTimeChangeEnd(valueEnd);
  };


  return(<>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateTimePicker label="Start date" format="DD/MM/YYYY hh:mm" ampm={false} 
    minDate={dayjs('2021-04-17')} 
    maxDate={dayjs('2022-04-17')}
    value={valueStart}
    onChange={handleDateChangeStart}
    disableFuture={true}
    
    />
    
    <DateTimePicker label="End date" format="DD/MM/YYYY hh:mm" ampm={false} 
    minDate={dayjs('2021-04-17')} 
    maxDate={dayjs('2022-04-17')}
    value={valueEnd}
    onChange={handleDateChangeEnd}/>
    </LocalizationProvider>
    

    

</>);
};

export default DateTimePickerComponent;



