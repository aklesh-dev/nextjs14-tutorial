import Links from "./links/Links";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        logo
      </div>

      <div>
        <Links />
      </div>
    </section>
  )
};
