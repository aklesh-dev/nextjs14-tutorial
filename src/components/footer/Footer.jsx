import styles from './footer.module.css';

export default function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>Aklesh-Dev</div>
      <div className={styles.text}>
        <p>© {new Date().getFullYear()} Aklesh Creative Studio. All rights reserved.</p>
      </div>
    </section>
  )
}
