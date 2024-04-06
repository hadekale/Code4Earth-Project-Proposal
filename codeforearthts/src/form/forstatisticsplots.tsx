'use client';
import { updateParameter } from '@/data/parameters';
import { Checkbox, FormGroup, FormControlLabel, FormControl, RadioGroup, FormLabel, Radio } from '@mui/material';
import React from 'react';
export default function ForStatisticsPlots(){


  return(
    <>
      <div className="flex align-middle justify-center bg-gray-200 ">
        <div><strong>For Statistics Plots</strong></div>
      </div>
      <div className="relative flex justify-start columns-1">
        <div className="relative left-0"><Show /></div>
        <div className="relative right-0"><AsFunctionOf /></div>
      </div>
    </>
      );}

export function Show() {
  function ShowCO(checked: boolean){if (checked == true){updateParameter("CO", true)}else{updateParameter("CO", false)}}
  function ShowNO2(checked: boolean){if (checked == true){updateParameter("NO2", true)}else{updateParameter("NO2", false)}}
  function ShowSO2(checked: boolean){if (checked == true){updateParameter("SO2", true)}else{updateParameter("SO2", false)}}
  function ShowAod500(checked: boolean){if (checked == true){updateParameter("aod500", true)}else{updateParameter("aod500", false)}}
  function ShowAod675(checked: boolean){if (checked == true){updateParameter("aod675", true)}else{updateParameter("aod675", false)}}
  

  return (
  <FormGroup className="relative left-0"> 
  <FormLabel id="show">Show: </FormLabel>
  {/* labels can be created dynamically by using label='${getLabel}' */}
<FormControlLabel control={<Checkbox onChange={e => ShowCO(e.target.checked) } size='small'/>} label='CO' />
<FormControlLabel control={<Checkbox onChange={e => ShowNO2(e.target.checked) } size='small'/>} label='NO2' />
<FormControlLabel control={<Checkbox onChange={e => ShowSO2(e.target.checked) }size='small'/>} label='SO2' />
<FormControlLabel control={<Checkbox onChange={e => ShowAod500(e.target.checked) }size='small'/>} label='aod500' />
<FormControlLabel control={<Checkbox onChange={e => ShowAod675(e.target.checked) }size='small'/>} label='aod675' />
</FormGroup>) 


}
export function AsFunctionOf() {
  const [value, setValue] = React.useState("time");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl>
      <FormLabel id="as-a-function-of">As a function of</FormLabel>
      <RadioGroup
        aria-labelledby="as-a-function-of"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
        
      >
        <FormControlLabel value="time" control={<Radio />} label="time" />
        <FormControlLabel value="leadtime" control={<Radio />} label="leadtime" />
      </RadioGroup>
    </FormControl>
  );
}

  
