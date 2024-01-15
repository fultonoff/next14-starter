import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const postCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img && 
        <Image src={post.img} fill alt="blog image" className={styles.img}/>
          
          }
        </div>
        <span className={styles.date}>12 12 2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  );
};

export default postCard;
