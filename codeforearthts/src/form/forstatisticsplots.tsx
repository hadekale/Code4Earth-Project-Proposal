'use client';

import { Checkbox, FormGroup, FormControlLabel, FormControl, RadioGroup, FormLabel, Radio } from '@mui/material';
export default function ForStatisticsPlots(){
  return(
    <>
      <div className="flex align-middle justify-center bg-gray-200 ">
        <div><strong>For Statistics Plots</strong></div>
      </div>
      <div className="relative flex justify-start columns-2">
        <div className="relative left-0"><Show /></div>
        <div className="relative right-0"></div>
      </div>
    </>
      );}

export function Show() {
  function ShowMeanFC(checked: boolean){
    if (checked == true){
      console.log("on")
    }
    else{
      console.log("off")
    }

  }

  return (<FormGroup className="relative left-0">
  <FormLabel id="show">Show: </FormLabel>
  {/* labels can be created dynamically by using label='${getLabel}' */}
<FormControlLabel control={<Checkbox onChange={e => ShowMeanFC(e.target.checked) } size='small'/>} label='Mean FC' />
<FormControlLabel control={<Checkbox size='small'/>} label='Mean OB' />
<FormControlLabel control={<Checkbox size='small'/>} label='Median FC' />
<FormControlLabel control={<Checkbox size='small'/>} label='Median OB' />
<FormControlLabel control={<Checkbox size='small'/>} label='Taylor Diagram' />
</FormGroup>) 


}
export function AsFunctionOf() {
  return (
    <FormControl>
      <FormLabel id="as-a-function-of">As a function of</FormLabel>
      <RadioGroup
        aria-labelledby="as-a-function-of"
        defaultValue="location"
        name="radio-buttons-group"
      >
        <FormControlLabel value="location" control={<Radio />} label="location" />
        <FormControlLabel value="time" control={<Radio />} label="time" />
        <FormControlLabel value="forecast range" control={<Radio />} label="forecast range" />
      </RadioGroup>
    </FormControl>
  );
}