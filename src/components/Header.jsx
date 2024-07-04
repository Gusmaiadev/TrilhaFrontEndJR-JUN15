import { useState } from 'react';
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
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
