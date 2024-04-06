export type VerificationType = {
    id: string;
}

export const verificationTypes: VerificationType[] = [
    {id:'bias'},
    {id:'mrse'},
];



export let selectedVerificationType: VerificationType;

export const selectVerificationType = (VerificationType: VerificationType) =>{
   selectedVerificationType= VerificationType;
  };

  export const getVerificationType = () => selectedVerificationType.id;