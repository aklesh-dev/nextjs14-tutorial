import Image from 'next/image';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <Image          
          src="/contact.png"
          alt='Contact'    
          fill      
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Phone Number (optional)' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
};
