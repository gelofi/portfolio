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
            <h2 className={styles.intro}>Hello, I am</h2>
            <h1>Gelofi</h1>
            <h2 className={styles.alias}>18 y.o., he/him, INTP-T</h2>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </section>
  )
}

export default About