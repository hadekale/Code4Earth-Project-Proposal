import { getTimeInterval } from "@/data/timeinterval";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest, res: NextResponse)=>{

    try{
        const timeInterval =getTimeInterval();
        return NextResponse.json({message:"OK",timeInterval},{status:200})
    } catch(err){
        return NextResponse.json(
            {message:"Error",err},
            {
                status:500,
            } 
        );
    }
};