import styles from "./About.module.css"


const About = () => {

    return (
        <div className={styles.contariner}>
            <ul className={styles.ulList}>
                <p className={styles.list}>Name: Eduardo Ayaviri</p>
                <p className={styles.list}>Species: Developer</p> 
                <p className={styles.list}>Gender: Web Developer</p>
                <p className={styles.list}>Status: Alive</p> 
                <p className={styles.list}>Origin: Jujuy, Argentina</p>                     
            </ul>
            <div className={styles.imageContainer}></div> 
        </div>

    )
}

export default About