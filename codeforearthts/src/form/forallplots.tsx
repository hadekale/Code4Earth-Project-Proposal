"use client";
import { Experiment, experiments, selectExperiment } from "@/data/experiments"/* placeholder */;

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteChangeDetails, AutocompleteChangeReason } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { VerificationType, selectVerificationType, verificationTypes } from "@/data/verification";



export default function ExperimentSelector() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Experiment[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {

      if (active) {
        setOptions([...experiments]);
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


  function HandleSelect(event: React.SyntheticEvent<Element, Event>, value: Experiment | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<Experiment> | undefined): void {
    if(value == null)
      console.log("Experiment cannot be empty")
    else{
      selectExperiment(value)
    }
  }

  return (
    <Autocomplete
      onChange={HandleSelect}
      id="Experiments"
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
          label="Experiments"
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

export function VerificationTypeSelector(){
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly VerificationType[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {

      if (active) {
        setOptions([...verificationTypes]);
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


  function HandleSelect(event: React.SyntheticEvent<Element, Event>, value: Experiment | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<Experiment> | undefined): void {
    if(value == null)
      console.log("Experiment cannot be empty")
    else{
      selectVerificationType(value)
    }
  }

  return (
    <Autocomplete
      onChange={HandleSelect}
      id="verification-type"
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
          label="Verification Type"
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