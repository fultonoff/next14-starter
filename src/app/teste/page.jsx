import { sayHello, addpost, deletePost } from "@/libs/action";
import React from "react";

const Texte = () => {
  
  return (
    <div>
      <form action={addpost} className='text-black'>
        <input type="text" placeholder="title"  name='title'/>
        <input type="text" placeholder="desc"  name='desc'/>
        <input type="text" placeholder="slug"  name='slug'/>
        <input type="text" placeholder="userId"  name='userId'/>
        <button className="bg-white text-black">Send</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id"/>
        <button className="bg-white text-black">Delete</button>
      </form>
    </div>
  );
};

export default Texte;
