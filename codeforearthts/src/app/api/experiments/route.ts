import { getExperiment } from "@/data/experiments";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest, res: NextResponse)=>{

    try{
        const experiments =getExperiment();
        return NextResponse.json({message:"OK",experiments},{status:200})
    } catch(err){
        return NextResponse.json(
            {message:"Error",err},
            {
                status:500,
            } 
        );
    }
};