import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlackBox from '../components/BlackBox';
import Header from '../components/Header';
import TextAnimation from '../components/TextAnimation';
import Me from '../assets/eu.jpeg'
import WhiteBox from '../components/WhiteBox';
import Carousel from '../components/Carousel'
import Music from '../assets/music.png'
import Astronaute from '../components/Astronaute';
import styles from '../styles/Page.module.css'
import Footer from '../components/Footer';


function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            offset: 350, 
        });
    }, []);

    return (
        <main>
            <Header/>
            <TextAnimation/>
            <BlackBox 
                title='Sobre Mim' 
                image={Me} 
                alt='Gustavo Maia' 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptatibus dolores veniam! Repellendus error nulla aliquid sapiente omnis nemo accusantium voluptatibus assumenda ut. Minima iusto ut quae quaerat placeat? Dignissimos.'
                aosAnimation="fade-left"
            />
            <WhiteBox 
                title='Tecnologias' 
                animation={<Carousel/>} 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptatibus dolores veniam! Repellendus error nulla aliquid sapiente omnis nemo accusantium voluptatibus assumenda ut. Minima iusto ut quae quaerat placeat? Dignissimos.'
                aosAnimation="fade-right"
            />
            <BlackBox 
                title='Gostos pessoais' 
                image={Music} 
                alt='Gustavo Maia' 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptatibus dolores veniam! Repellendus error nulla aliquid sapiente omnis nemo accusantium voluptatibus assumenda ut. Minima iusto ut quae quaerat placeat? Dignissimos.'
                aosAnimation="fade-left"
            />
            <WhiteBox 
                title='Motivações' 
                animation={<Astronaute/>} 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptatibus dolores veniam! Repellendus error nulla aliquid sapiente omnis nemo accusantium voluptatibus assumenda ut. Minima iusto ut quae quaerat placeat? Dignissimos.'
                aosAnimation="fade-right"
            />
            <Footer/>
        </main>
    );
}

export default Page;
