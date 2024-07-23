import styles from './ProjectsStyles.module.css';
import funknIcon from "../../../assets/funkn.png";
import kkohiIcon from '../../../assets/kko-hi.png';
import ProjectCards from '../../../common/ProjectCards';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>

        <ProjectCards /* Funkn's Card */
        proj="Funkn"
        desc="A Discord music bot. Deprecated, but is one of my favorite projects!"
        src={funknIcon} 
        link="https://funkn.glitch.me/"
        alt="Funkn"
        h3={styles.centerizeBold}
        p={styles.centerize}/>

        <ProjectCards
        proj="Kko-hi"
        desc="An all-around Discord bot made in CoffeeScript."
        src={kkohiIcon}
        link="https://github.com/ghnigelofi/Kko-hi"
        alt="Kko-hi"
        h3={styles.centerizeBold}
        p={styles.centerize}/>

        <ProjectCards
        proj="Levelier"
        desc="A Discord bot made to track a member's server level."
        src={funknIcon}
        link="https://github.com/ghnigelofi/Levelier"
        alt="Levelier"
        h3={styles.centerizeBold}
        p={styles.centerize}/>

      </div>
    </section>
  )
}

export default Projects