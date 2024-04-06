"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import Link from "next/link";
import Plot from "react-plotly.js";
import DateTimeRange from "./dateselector";
import { getParameters } from "@/data/parameters";
import { selectedExperiment } from "@/data/experiments";


export default function PlotIt(){

    
    return <Button onClick={() => { 
      console.log(getParameters())
      console.log(selectedExperiment)
      }} variant="contained">Plot It</Button>




}