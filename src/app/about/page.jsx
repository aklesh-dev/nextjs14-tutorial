import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/27957826/pexels-photo-27957826/free-photo-of-two-people-riding-motorcycles-down-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="about" fill/>
      </div>
    </div>
  )
};
