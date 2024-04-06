"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import Link from "next/link";
import Plot from "react-plotly.js";
import DateTimeRange from "./dateselector";
import { getParameters } from "@/data/parameters";
import { selectedExperiment } from "@/data/experiments";
import { selectedFunction } from "@/data/asfunctionof";
import { selectedVerificationType } from "@/data/verification";
import { selectedTimeInterval } from "@/data/timeinterval";


export default function PlotIt(){

    
    return <Button onClick={() => { 
      console.log(getParameters())
      console.log(selectedExperiment)
      console.log(selectedFunction)
      console.log(selectedVerificationType)
      console.log(selectedTimeInterval)
      }} variant="contained">Plot It</Button>




}