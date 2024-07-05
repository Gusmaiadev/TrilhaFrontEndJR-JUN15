import styles from '../styles/Footer.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';




function Footer({id}){
    return(
        <footer className={styles.footer} id={id}>
            <div className={styles.box_title}>
                    <h1>Contato</h1>
            </div>
            <div className={styles.box_social_icons}>
                <a href="https://github.com/Gusmaiadev" target='_blank'><GitHubIcon className={styles.icon} style={{ fontSize: '50px'}}/></a>
                <a href="https://www.linkedin.com/in/gustavo-maia-a14908258/" target='_blank'><LinkedInIcon className={styles.icon} style={{ fontSize: '50px'}}/></a>
                <a href="mailto:gusmaia.araujo@outlook.com" target='_blank'><EmailIcon className={styles.icon} style={{ fontSize: '50px'}}/></a>
                <a href="https://gusmaiadev.github.io/portifolio_gustavoM/" target='_blank'><ContactPageIcon className={styles.icon }  style={{ fontSize: '50px'}}/></a>
            </div>
        </footer>
    )
}

export default Footer; 