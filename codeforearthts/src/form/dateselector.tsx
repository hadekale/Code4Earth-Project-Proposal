"use client";

import { TimeInterval, selectTimeInterval, timeIntervals } from "@/data/timeinterval";
import { AutocompleteChangeReason, AutocompleteChangeDetails, Autocomplete, TextField, CircularProgress } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React from "react";/*
export default function DateTimeRange(){
    const [valueEnd, setValueEnd] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    
    const [valueStart, setValueStart] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    return(<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Start date" format="DD/MM/YYYY hh:mm" ampm={false} 
        minDate={dayjs('2021-04-17')} 
        maxDate={dayjs('2022-04-17')}
        value={valueStart}
        onChange={(newValueStart) =>setValueStart(newValueStart)}
        disableFuture={true}
        
        />
        
        <DateTimePicker label="End date" format="DD/MM/YYYY hh:mm" ampm={false} 
        minDate={dayjs('2021-04-17')} 
        maxDate={dayjs('2022-04-17')}
        value={valueEnd}
        onChange={(newValueEnd) => setValueEnd(newValueEnd)}/>
        </LocalizationProvider>
        

        

    </>)
    

    
}*/
export default function TimeIntervalSelector() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<readonly TimeInterval[]>([]);
    const loading = open && options.length === 0;
  
    React.useEffect(() => {
      let active = true;
  
      if (!loading) {
        return undefined;
      }
  
      (async () => {
  
        if (active) {
          setOptions([...timeIntervals]);
        }
      })();
  
      return () => {
        active = false;
      };
    }, [loading]);
  
    React.useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);
  
  
    function HandleSelect(event: React.SyntheticEvent<Element, Event>, value: TimeInterval | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<TimeInterval> | undefined): void {
      if(value == null)
        console.log("Tıme Interval cannot be empty")
      else{
        selectTimeInterval(value)
      }
    }
  
    return (
      <Autocomplete
        onChange={HandleSelect}
        id="time-interval"
        sx={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.id}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Time Intervals"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    );
  }
  
  



