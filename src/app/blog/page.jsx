import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

export default function BlogPage() {
  return (
    <section className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>

    </section>
  )
};
