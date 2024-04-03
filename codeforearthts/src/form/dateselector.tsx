"use client";

import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
export default function DateTimeRange(){
    return(<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker onClose={setStartDate} label="Start date" format="DD/MM/YYYY hh:mm" ampm={false} />
        <DateTimePicker onClose={setEndDate} label="End date" format="DD/MM/YYYY hh:mm" ampm={false} 
        minDate={dayjs('2021-04-17')} 
        maxDate={dayjs('2022-04-17')}/>
        </LocalizationProvider>
    </>)

}
function setStartDate(): void {
    let startDate={}
    throw new Error("Function not implemented.");
}

function setEndDate(): void {
    throw new Error("Function not implemented.");
}

