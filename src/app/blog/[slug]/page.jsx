import Image from 'next/image';
import styles from './singlePost.module.css';

export default function SinglePostPage() {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src = "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg" alt="car" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1>Single Post Page</h1>
        <div className={styles.detail}>
          <Image src = "/noavatar.png"
          alt="author"
          width={50}
          height={50}
          className={styles.authorImg} />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Izumi di Raizel</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ex soluta consequuntur. Saepe quis quisquam veritatis dignissimos ipsum earum? Repellat fugiat provident ducimus corporis natus ullam modi dolore in consectetur.
        </div>
      </div>
    </section>
  )
}
