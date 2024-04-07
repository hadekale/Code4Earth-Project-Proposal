"use client";
import { Button } from "@mui/material";
import {selectedFunction} from "@/data/asfunctionof"
import { selectedParameter } from "@/data/parameters";
import { selectedExperiment } from "@/data/experiments";
import { selectedTimeInterval } from "@/data/timeinterval";
import { selectedVerificationType } from "@/data/verification";

export default function PlotIt(){
  
  

  function MyCallback(arg0: string): void {
    throw new Error("Function not implemented.");
  }

    return (<Button onClick={()=>{httpGetAsync(`/?asAFunctionOf=${selectedFunction.id}&parameter=${selectedParameter.id}&experimentId=${selectedExperiment.id}&verificationType=${selectedVerificationType.id}&timeInterval=${selectedTimeInterval.id}`,MyCallback)}}
      
    
    variant="contained">Plot It</Button>)
    

}

async function httpGetAsync(theUrl: string | URL, callback: (arg0: string) => void) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) callback(xmlHttpReq.responseText);
  };
  xmlHttpReq.open("GET", theUrl, true); // true for asynchronous
  xmlHttpReq.send(null);
}

