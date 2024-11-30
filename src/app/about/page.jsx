import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
          We create high-quality web applications that are fast, secure, and scalable.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut numquam omnis vitae quis, aspernatur facere minus aperiam ipsam dolores, possimus, sed beatae illum. Fuga impedit deleniti sit numquam blanditiis?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={'/about.png'} alt="about img" fill className={styles.img} />
      </div>
    </section>
  )
};
