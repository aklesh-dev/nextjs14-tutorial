import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <section className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Aklesh
      </Link>

      <div>
        <Links />
      </div>
    </section>
  )
};
