
import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/libs/data';





 const SinglePagePost = async ({params}) => {

  

  const {slug}= params

  const posts = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/7949632/pexels-photo-7949632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill className={styles.img} alt=''/>

      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{posts?.title}</h1>
        <div className={styles.detail}>
      {/* <Image src='https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className={styles.avatar} width={50} height={50} alt='user'/> */}
      {/* <div className={styles.detailText}>
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
        <span className={styles.detailValue}>01.01.2024</span>

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