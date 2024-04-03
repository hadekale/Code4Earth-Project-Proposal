"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import Link from "next/link";
import Plot from "react-plotly.js";


export default function PlotIt(){

    
    return <Button onClick={() => { 
        window.location.href="codeforearthts/src/app/plotly/app.tsx"
      }} variant="contained">Plot It</Button>




}