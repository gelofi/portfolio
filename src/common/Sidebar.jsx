import styles from "../common/Sidebar.module.css";

function Sidebar() {
    const noSidebar = window.matchMedia('(max-width: 768px').matches;
    if(noSidebar){
        return null;
    } else {
    return (
        <div class={styles.sidenav}>
            <a href="#main">Intro</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="designs">Designs</a>
        </div>
        )
    }
}

export default Sidebar