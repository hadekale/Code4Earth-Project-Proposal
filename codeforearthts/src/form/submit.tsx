"use client";
import { Button } from "@mui/material";
import {selectedFunction} from "@/data/asfunctionof"
import { selectedParameter } from "@/data/parameters";
import { selectedExperiment } from "@/data/experiments";
import { selectedTimeInterval } from "@/data/timeinterval";
import { selectedVerificationType } from "@/data/verification";

export default function PlotIt(){
  `/?asAFunctionOf=${selectedFunction.id}&parameter=${selectedParameter.id}&experimentId=${selectedExperiment.id}&verificationType=${selectedVerificationType.id}&timeInterval=${selectedTimeInterval.id}`

    return <Button onClick={()=>
      console.log(`/?asAFunctionOf=${selectedFunction.id}&parameter=${selectedParameter.id}&experimentId=${selectedExperiment.id}&verificationType=${selectedVerificationType.id}&timeInterval=${selectedTimeInterval.id}`)}
    
    variant="contained">Plot It</Button>
    




}

