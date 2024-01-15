import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
// import { getPosts } from "@/libs/data";


const getPosts = async()=>{

  try {
    const res=await fetch('http://localhost:3000/api/blog')
    const data = await res.json()
    return data
    
  } catch (error) {
    console.log('Could not fetch data');
  }
}

const BlogPage = async () => {
  const posts = await getPosts()
  return (
    <div className={styles.container}>
      {posts?.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
