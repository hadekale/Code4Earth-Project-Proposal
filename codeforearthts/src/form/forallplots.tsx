"use client";
import { experiments, fieldgroups } from "@/lib/data"/* placeholder */;

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteChangeDetails, AutocompleteChangeReason } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

interface ExperimentTitle {
  title: string;
}


export default function ExperimentSelector() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly ExperimentTitle[]>([]);
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


  function HandleSelect(event: React.SyntheticEvent<Element, Event>, value: ExperimentTitle | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<ExperimentTitle> | undefined): void {
    if(value == null)
      console.log("Experiment cannot be empty")
    else{
      console.log(value.title)
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
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
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

