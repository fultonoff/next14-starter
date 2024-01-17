"use server";

import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from 'bcryptjs';

export const addpost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/post");
  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);

    revalidatePath("/post");
  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogOut = async () => {
  "use server";

  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password,img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return {error:"Password doesnt match"};
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });
    if(user){
        return {error: 'username already exists'}
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();

return {success: true}
} catch (error) {
    return { error: "Something went wrong" };
  }
};


export const login = async (prevState, formData) => {
  const { username, password} = Object.fromEntries(formData);

  

  try {
    
    await signIn('credentials', {username, password});
    
  } catch (error) {

    if(error.message.includes('CredentialsSignin')){
        return {error: 'wrong username or password'}
    }
    throw error;
  }
};
