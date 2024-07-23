import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id='Footer' className={styles.container}>
        <p>&copy; 2024 Gelofi<br/>
        Socials' Icons by <a className={styles.links} href='https://icons8.com/' target='_blank'>Icons8</a></p>
    </section>
  )
}

export default Footer