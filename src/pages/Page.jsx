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
import Footer from '../components/Footer';
import Data from '../data/data';


function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            offset: 350, 
        });
    }, []);

    const { titles, texts } = Data;

    return (
        <main>
            <Header/>
            <TextAnimation/>
            <BlackBox 
                title={titles.title_one} 
                image={Me} 
                alt='Gustavo Maia' 
                text={texts.text_one}
                aosAnimation="fade-left"
            />
            <WhiteBox 
                title={titles.title_two} 
                animation={<Carousel/>} 
                text={texts.text_two}
                aosAnimation="fade-right"
            />
            <BlackBox 
                title={titles.title_three} 
                image={Music} 
                alt='Gustavo Maia' 
                text={texts.text_three}
                aosAnimation="fade-left"
            />
            <WhiteBox 
                title={titles.title_four} 
                animation={<Astronaute/>} 
                text={texts.text_four}
                aosAnimation="fade-right"
            />
            <Footer/>
        </main>
    );
}

export default Page;
