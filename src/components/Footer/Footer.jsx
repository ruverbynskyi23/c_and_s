import React from 'react';
import { Link } from 'react-router-dom';
import { generalPics } from '../../assets/index';
import styles from './footer.module.scss';

class Footer extends React.Component {
    render() {
        return(
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <section className={styles.content}>
                        <Link className={styles.logo} to="/">
                            <img src={generalPics.logo} alt="логотип"/>
                        </Link>

                        <nav className={styles.navigation}>
                            <ul className={styles.navList}>
                                <li className={styles.listItem}>
                                    <Link className={styles.itemLink} to="/history">Наша история</Link>
                                </li>
                                <li className={styles.listItem}>
                                    <Link className={styles.itemLink} to="/order">Ассортимент</Link>
                                </li>
                                <li className={styles.listItem}>
                                    <Link className={styles.itemLink} to="/gallery">Галлерея</Link>
                                </li>
                                <li className={styles.listItem}>
                                    <Link className={styles.itemLink} to="/faqs">Оплата и доставка</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={styles.contacts}>
                            <div className={styles.time}>
                                <p className={styles.text}>Принимаем заказы:</p>
                                <p className={styles.text}>пн-вс 9:00 - 21:00</p>
                            </div>
                            <div className={styles.phones}>
                                <a className={styles.phone} href="tel:+380994657834">+380994657834</a>
                                <a className={styles.phone} href="tel:+380994657834">+380994657834</a>
                            </div>
                        </div>
                    </section>

                    <section className={styles.legal}>
                        <p className={styles.rights}>{`© 2020 C&S. All rights reserved.`}</p>
                        <p className={styles.caption}>Made with love</p>
                        <p className={styles.madenBy}>handmade from Ukraine</p>
                    </section>
                </div>
            </footer>
        )
    }
}

export default Footer;