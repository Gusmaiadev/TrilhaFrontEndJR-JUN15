import React, { useState, useEffect } from 'react';
import styles from '../styles/TextAnimation.module.css';

function TextAnimation() {
    const textsArray = ['Desenvolvedor', 'Programador', 'o Gustavo'];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (charIndex < textsArray[index].length) {
            interval = setInterval(() => {
                setDisplayText((prevText) => prevText + textsArray[index][charIndex]);
                setCharIndex((prevIndex) => prevIndex + 1);
            }, 150); 
        } else {
            clearInterval(interval);
            setTimeout(() => {
                setDisplayText('');
                setCharIndex(0);
                setIndex((prevIndex) => (prevIndex + 1) % textsArray.length);
            }, 1000); 
        }

        return () => clearInterval(interval);
    }, [index, charIndex, textsArray]);

    return (
        <section className={styles.box_textAnimation}>
            <div className={styles.textOne}>
                <p>Olá, eu sou </p>
            </div>
            <div className={styles.textTwo}>
                 <p>{displayText}</p>
            </div>
        </section>
    );
}

export default TextAnimation;
