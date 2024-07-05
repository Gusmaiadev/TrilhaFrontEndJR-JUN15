import { useState } from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';

// Imagens
import Logo from '../assets/logo.png';
import Close from '../assets/close.png';
import Menu from '../assets/menu.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.box_logo}>
                        <img className={styles.logo} src={Logo} alt="logo" />
                    </div>
                    <div className={styles.box_menu} onClick={toggleMenu}>
                        <img
                            className={styles.menu}
                            src={menuOpen ? Close : Menu}
                            alt={menuOpen ? 'close' : 'menu'}
                        />
                    </div>
                </div>
            </header>
            {menuOpen && (
                <div className={styles.boxMenu}>
                    <div className={styles.menuSidebar}>
                        <ul>
                            <li>
                                <Link to="section1" smooth={true} duration={500} onClick={toggleMenu}>
                                    Sobre mim
                                </Link>
                            </li>
                            <li>
                                <Link to="section2" smooth={true} duration={500} onClick={toggleMenu}>
                                    Tecnologias
                                </Link>
                            </li>
                            <li>
                                <Link to="section3" smooth={true} duration={500} onClick={toggleMenu}>
                                    Gostos pessoais
                                </Link>
                            </li>
                            <li>
                                <Link to="section4" smooth={true} duration={500} onClick={toggleMenu}>
                                    Motivações
                                </Link>
                            </li>
                            <li>
                                <Link to="section5" smooth={true} duration={500} onClick={toggleMenu}>
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
