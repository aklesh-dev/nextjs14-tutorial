import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
   <section className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Welcome to Creative Designs</h1>
      <p className={styles.desc}>This is a simple example of a Next.js app with a home page.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="Brands" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt="Hero" fill className={styles.heroImg} />
    </div>
   </section>
  );
}
