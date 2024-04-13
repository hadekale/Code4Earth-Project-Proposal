type Parameter = {
    id: string;
    checked: boolean;
}


let parameters: Parameter[] = [
    {id:'CO', checked:false},
    {id:'NO2', checked:false},
    {id:'SO2', checked:false},
    {id:'aod500', checked:false},
    {id:'aod675', checked:false}
];


export let selectedParameter: Parameter

export const getParameter= () => selectedParameter.id;



export const getParameters = () => parameters;

export const addParameter = (parameter: Parameter) => {
    parameters.push(parameter);
};

export const deleteParameter = (id: string) =>{
    parameters = parameters.filter((parameter)=>parameter.id !== id);
};

export const updateParameter = (id: string, checked: boolean) =>{
    const parameter =  parameters.find((parameter)=> parameter.id === id);
  
      if (parameter){
          parameter.checked = checked;
          selectedParameter= parameter;
          } else{
          throw new Error("There is no such parameter")
      }
  };

export const getById = (id: string)=> {
    return parameters.find((parameter)=>parameter.id === id);
};