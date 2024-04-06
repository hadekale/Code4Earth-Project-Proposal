export type Experiment = {
    id: string;
}

export const experiments: Experiment[] = [
    {id:'oper'},
    {id:'mc0074'},
];


export let selectedExperiment: Experiment;

export const selectExperiment = (experiment: Experiment) =>{
   selectedExperiment= experiment;
  };

  export const getExperiment = () => selectedExperiment;