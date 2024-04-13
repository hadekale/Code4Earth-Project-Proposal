export type asFunctionOf = {
    id: string;
}

export const functionsOf: asFunctionOf[] = [
    {id:'time'},
    {id:'leadtime'},
];


export let selectedFunction: asFunctionOf;

export const selectFunction = (prop: asFunctionOf) =>{
   selectedFunction= prop;
  };

  export const getFunction= () => selectedFunction.id;

