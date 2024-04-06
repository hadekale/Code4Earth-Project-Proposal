"use client";

import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
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
    

    
}




