import BlackBox from '../components/BlackBox';
import Header from '../components/Header';
import TextAnimation from '../components/TextAnimation';
import styles from '../styles/Page.module.css'

function Page(){
    return(
        <main>
            <Header/>
            <TextAnimation/>
            <BlackBox/>
        </main>
    )
}

export default Page;