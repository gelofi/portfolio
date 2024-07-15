import styles from './Skills.module.css';
import checkdark from '../../../assets/checkmark-dark.svg';
import checklight from '../../../assets/checkmark-light.svg';
import SkillList from '../../../common/SkillList';

// theme checker
import { useTheme } from '../../../common/ThemeContext';

function Skills() {

  // get the theme
  const { theme } = useTheme();

  // change checkmark based on current theme
  const checkMarkIcon = theme === 'light' ? checklight : checkdark;

  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='JavaScript'/>
            <SkillList src={checkMarkIcon} skill='NodeJS'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='UI/UX Design'/>
            <SkillList src={checkMarkIcon} skill='Web Design'/>
            <SkillList src={checkMarkIcon} skill='PubMats'/>
            <SkillList src={checkMarkIcon} skill='Infographics'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Traditional Art'/>
            <SkillList src={checkMarkIcon} skill='Digital Art'/>
            <SkillList src={checkMarkIcon} skill='Multilingualism'/>
        </div>
    </section>
  )
}

export default Skills