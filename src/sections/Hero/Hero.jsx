import styles from './HeroStyles.module.css';
import gelofi from '../../assets/gelofi-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import fblight from '../../assets/fb-light.svg';
import fbdark from '../../assets/fb-dark.svg';
import ghlight from '../../assets/gh-light.svg';
import ghdark from '../../assets/gh-dark.svg';
import iglight from '../../assets/ig-light.svg';
import igdark from '../../assets/ig-dark.svg';

import CV from "../../assets/cv.pdf";
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const facebookIcon = theme === 'light' ? fblight : fbdark
    const githubIcon = theme === 'light' ? ghlight : ghdark
    const instagramIcon = theme === 'light' ? iglight : igdark

    return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero}
                src={gelofi}
                alt="Gelofi PFP"/>
            <img className={styles.colorMode}
                src={themeIcon}
                alt="Color Mode"
                onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Carl Angelo <br/>Volcan</h1>
            <h2>a.k.a. Gelofi</h2>
            <span>
                <a href="https://facebook.com/fbnielo" target='_blank'>
                    <img src={facebookIcon} alt='Facebook'></img>
                </a>
                <a href="https://github.com/ghnigelofi" target='_blank'>
                    <img src={githubIcon} alt='GitHub'></img>
                </a>
                <a href="https://instagram/ignielo" target='_blank'>
                    <img src={instagramIcon} alt='Instagram'></img>
                </a>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href={CV} className='hover' download>Resume</a>
        </div>
    </section>
  );
}

export default Hero;