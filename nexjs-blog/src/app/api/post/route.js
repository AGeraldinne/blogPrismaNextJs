import {NextResponse} from "next/server";

export function GET(){
    try{
        return NextResponse.json("hello world!");
    }catch(error){
        console.log(error);
    }
}