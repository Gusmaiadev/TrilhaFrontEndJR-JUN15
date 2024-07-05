import styles from '../styles/BlackBox.module.css';


function BlackBox({ text, image, desc, title, aosAnimation, id }) {
    return (
        <section className={styles.section_blackBox} id={id}>
            <div className={styles.container_blackBox} >
                <div className={styles.box_text}  data-aos={aosAnimation}>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <div className={styles.box_img} data-aos={aosAnimation}>
                    <div className={styles.img_wrapper}>
                        <img className={styles.img} src={image} alt={desc} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlackBox;
