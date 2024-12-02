import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

function PostCard() {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg" alt='post' fill  className={styles.img} />
        </div>
        <span className={styles.date}>12.12.2024</span>
      </div>

      <div className={styles.bottom}>
        <h2 className={styles.title}>Post Title</h2>
        <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero facilis voluptate labore nihil fugiat impedit fuga rem id voluptates eius deserunt, praesentium veritatis eligendi natus tempore ipsa commodi. Debitis, eligendi?</p>
        <Link href='/blog/post' className={styles.link}>READ MORE</Link>
      </div>
    </section>
  )
}

export default PostCard