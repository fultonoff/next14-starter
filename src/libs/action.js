'use server'

import { Post } from "./models"
import { connectToDb } from "./utils"
import { revalidatePath } from 'next/cache'



export const addpost = async(formData)=>{

    const {title, desc, slug, userId} = Object.fromEntries(formData)

    
    try {
        connectToDb()

        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })

        await newPost.save()
        console.log('saved to db');
        revalidatePath('/post')
        
    } catch (error) {
        console.log(error);
        return {error: 'Somthing went wrong'}
    }
}

export const deletePost = async(formData)=>{
    
    const { id} = Object.fromEntries(formData)

    
    try {
        connectToDb()

        await Post.findByIdAndDelete(id)
       
        revalidatePath('/post')
        
    } catch (error) {
        console.log(error);
        return {error: 'Somthing went wrong'}
    }
}