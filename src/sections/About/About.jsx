import styles from './About.module.css';
import { useTheme } from '../../common/ThemeContext';

// assets
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function About() {

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon

    return (
    <section id="about" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.colorMode}
                src={themeIcon}
                alt="Color Mode"
                onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h2 className={styles.intro}>Introductions</h2>
            <h1>Gelofi</h1>
            <h2 className={styles.alias}>18 y.o., he/him, INTP-T</h2>
            <p className={styles.description}>As a creator, I aspire to leave remarkable creations to this world, as proof that not only I lived, but I lived well. I want to be more effective and efficient in what I do.
            <br/><br/>
            I'm not the best in talking, but I do try. And trying I did, by learning three languages: Filipino, English, and Japanese. To this day, my multilingualism remains as one of my most important skills.
            <br/><br/>
            Apart from work, I enjoy life as well; Programming and Design aren't my only hobbies. I also spend hours of gameplay, pass the time by reading books, or appreciate the nature by painting them or taking a photograph.
            </p>
        </div>
        </section>
  )
}

export default About