import styles from '../styles/WhiteBox.module.css'

function WhiteBox({text, animation, title, aosAnimation}){
    return(
        <section className={styles.section_whiteBox}>
            <div className={styles.container_whiteBox}>
                    <div className={styles.box_animation} data-aos={aosAnimation}>
                            <div className={styles.space_animation}>
                                    {animation}
                            </div>
                    </div>
                    <div className={styles.box_text} data-aos={aosAnimation}>
                            <h1>{title}</h1>
                            <p>{text}</p>
                    </div>
            </div>
        </section>
    )
}

export default WhiteBox;