"use client";
import { Button } from "@mui/material";
import {selectedFunction} from "@/data/asfunctionof"
import { selectedParameter } from "@/data/parameters";
import { selectedExperiment } from "@/data/experiments";
import { selectedTimeInterval } from "@/data/timeinterval";
import { selectedVerificationType } from "@/data/verification";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function PlotIt(){
  const { push } = useRouter();

    return (<Button onClick={()=>{
      push(`/?asAFunctionOf=${selectedFunction.id}&parameter=${selectedParameter.id}&experimentId=${selectedExperiment.id}&verificationType=${selectedVerificationType.id}&timeInterval=${selectedTimeInterval.id}`)
    }}
      
    
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

