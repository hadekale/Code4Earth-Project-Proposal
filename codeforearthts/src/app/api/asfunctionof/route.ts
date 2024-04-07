import { getFunction } from "@/data/asfunctionof";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest, res: NextResponse)=>{

    try{
        const functionsOf =getFunction();
        return NextResponse.json({message:"OK",functionsOf},{status:200})
    } catch(err){
        return NextResponse.json(
            {message:"Error",err},
            {
                status:500,
            } 
        );
    }
};