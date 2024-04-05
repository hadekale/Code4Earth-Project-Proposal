"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import Link from "next/link";
import Plot from "react-plotly.js";
import DateTimeRange from "./dateselector";


export default function PlotIt(){

    
    return <Button onClick={() => { 
      console.log(DateTimeRange())
      }} variant="contained">Plot It</Button>




}