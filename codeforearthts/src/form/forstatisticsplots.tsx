'use client';
import { asFunctionOf, functionsOf, selectFunction,  } from '@/data/asfunctionof';
import { Experiment } from '@/data/experiments';
import { updateParameter } from '@/data/parameters';
import { selectVerificationType } from '@/data/verification';
import { Checkbox, FormGroup, FormControlLabel, FormControl, RadioGroup, FormLabel, Radio, Autocomplete, TextField, AutocompleteChangeDetails, AutocompleteChangeReason, CircularProgress } from '@mui/material';
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
/*export function AsFunctionOf() {
  const [value, setValue] = React.useState("time");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setFunctionOf(value);
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
}*/
export function AsFunctionOf() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly asFunctionOf[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {

      if (active) {
        setOptions([...functionsOf]);
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


  function HandleSelect(event: React.SyntheticEvent<Element, Event>, value: asFunctionOf | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<Experiment> | undefined): void {
    if(value == null)
      console.log("As a Function of cannot be empty")
    else{
      selectFunction(value)
    }
  }

  return (
    <Autocomplete
      onChange={HandleSelect}
      id="as a function of"
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
          label="As A Function Of"
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


  
