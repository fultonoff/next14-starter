import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const postCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill alt="" className={styles.img}/>
        </div>
        <span className={styles.date}>12 12 2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  );
};

export default postCard;
