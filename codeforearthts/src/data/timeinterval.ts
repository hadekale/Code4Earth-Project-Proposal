export type TimeInterval = {
    id: string;
}

export const timeIntervals: TimeInterval[] = [
    {id:'20201001-20201031'},
    {id:'20201101-20201130'},
];


export let selectedTimeInterval: TimeInterval;

export const selectTimeInterval = (timeInterval: TimeInterval) =>{
   selectedTimeInterval= timeInterval;
  };

  export const getTimeInterval = () => selectedTimeInterval.id;