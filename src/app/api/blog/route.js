import { connectToDb } from "@/libs/utils";
import { Post } from "@/libs/models";
import {NextResponse} from 'next/server'

export const GET = async (request)=>{
    try {
        connectToDb()
        const posts = await Post.find()
        return NextResponse.json(posts)
    } catch (error) {
        console.log('something went wrong');
        throw new Error(error)
    }
}