import styles from '../styles/BlackBox.module.css'
import Me from '../assets/eu.jpeg'

function BlackBox(){
    return(
        <section className={styles.section_blackBox}>
            <div className={styles.container_blackBox}>
                    <div className={styles.box_text}>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Nesciunt praesentium dicta quaerat voluptatum odio autem
                                numquam quibusdam totam porro, asperiores est accusamus veritatis
                                vel alias esse nemo ea, provident accusantium!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Nesciunt praesentium dicta quaerat voluptatum odio autem
                                numquam quibusdam totam porro, asperiores est accusamus veritatis
                                vel alias esse nemo ea, provident accusantium!</p>
                    </div>
                    <div className={styles.box_img}>
                        <div className={styles.img_wrapper}>
                                <img className={styles.img} src={Me} alt='Gustavo Maia' />
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default BlackBox;