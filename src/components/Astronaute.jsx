import Astronauteimg from '../assets/astronaut.png'
import styles from '../styles/Astronaute.module.css'

function Astronaute(){
    return(
        <>
            <img className={styles.img} src={Astronauteimg} alt="Astronauta" />
        </>
    )
}

export default Astronaute;