import { getFunction } from "@/data/asfunctionof";
import { getExperiment } from "@/data/experiments";
import { getParameters } from "@/data/parameters";
import { getTimeInterval } from "@/data/timeinterval";
import { getVerificationType } from "@/data/verification";
import { NextResponse } from "next/server"


export async function GET() {
    try{
        const verificationTypes =getVerificationType();
        const functionsOf =getFunction();
        const parameters =getParameters();
        const experiments =getExperiment();
        const timeInterval =getTimeInterval();
        return NextResponse.json({message:"OK",functionsOf,parameters,experiments,verificationTypes,timeInterval},{status:200})
    } catch(err){
        return NextResponse.json(
            {message:"Error",err},
            {
                status:500,
            } 
        );
    }
}