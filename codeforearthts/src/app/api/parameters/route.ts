import { addParameter,getParameters, updateParameter } from "@/data/parameters";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest, res: NextResponse)=>{

    try{
        const parameters =getParameters();
        return NextResponse.json({message:"OK",parameters},{status:200})
    } catch(err){
        return NextResponse.json(
            {message:"Error",err},
            {
                status:500,
            } 
        );
    }
};

export const POST = async (req: NextRequest, res:NextResponse)=>{
    const {id, checked} = await req.json();
    try{
        const parameter= {id, checked};
        addParameter(parameter);
        return NextResponse.json({message:"OK",parameter},{status:201})
    }catch(err){
        return NextResponse.json(
            {message:"Error",err},
            {
                status:500,
            } 
        );
    }
};

export const PUT = async (req: NextRequest, res: NextResponse)=>{
    try{
        const{id, checked}= await req.json();
            updateParameter(id, checked);
            return NextResponse.json({message:"OK"},{status:200})
    } catch(err){return NextResponse.json({message:"Error",err},{status:500});
    }

}