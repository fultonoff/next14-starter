
import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser';
// import { getPost } from '@/libs/data';





export const generateMetadata = async ({params}) =>{
  const {slug} = params
  const posts = await getPost(slug);

  return {
    title: `Post - ${posts?.title ?? "Not found"}`,
    description: `${posts?.description}`
  }
}


const getPost = async (slug) =>{
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
    const post = await res.json()
    return post
  } catch (error) {
    console.log(error);
  }
}

 const SinglePagePost = async ({params}) => {

  

  const {slug}= params

  const posts = await getPost(slug);
  // const posts = await getPost(slug);

  console.log(posts);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>

        {posts?.img && 
        
        <Image src={posts.img} fill className={styles.img} alt=''/>
        }

      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{posts?.title}</h1>
        <div className={styles.detail}>
      {/*
      { <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>John doe</span>

      </div> */}

      {posts && 
      
      <Suspense fallback={<p>Loading...</p>}>

      <PostUser userId={posts?.userId}/>
      </Suspense>
      
      }
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Published</span>
        <span className={styles.detailValue}>{posts?.createdAt.toString().slice(4, 16)}</span>

      </div>
        </div>

        <div className={styles.content}>
          {posts?.body}
        </div>
      </div>
    </div>
  )
}


export default SinglePagePost