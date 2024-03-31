import { Autocomplete, TextField, Stack } from "@mui/material";
import { ReactNode } from "react";
import { experiments, fieldgroups } from "SQL"/* placeholder */;
export default function ForAllPlots(){
    



return (<ExperimentSelector/>)

}
interface ExperimentOptionType{
    title: string;

}
export function ExperimentSelector(){
    const experimentList = {
        options: experiments,
        getOptionLabel: (option: ExperimentOptionType) => option.title,
    };
    return(<Autocomplete
        {...experimentList}
        id="experiment-selector"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Choose a Experiment" variant="standard" />
        )}
      />)
    }
    export function FieldGroup(){
        
        const fieldGroupList = {
            options: fieldgroups,
            getOptionLabel: (option: ExperimentOptionType) => option.title,
        };
        return(<Autocomplete
            {...fieldGroupList}
            id="experiment-selector"
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label="Choose a Experiment" variant="standard" />
            )}
          />)
        }

