
import { getVerificationType } from "@/data/verification";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest, res: NextResponse)=>{

    try{
        const verificationTypes =getVerificationType();
        return NextResponse.json({message:"OK",verificationTypes},{status:200})
    } catch(err){
        return NextResponse.json(
            {message:"Error",err},
            {
                status:500,
            } 
        );
    }
};