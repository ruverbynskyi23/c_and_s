import React from 'react';
import { social } from '../../assets/index';
import styles from './contacts.module.scss';

class Contacts extends React.Component {
    render() {
        return(
            <section className={styles.contacts}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Остались вопросы?</h2>
                    <p className={styles.sectionText}>{`Напишите нам и мы обязательно на них ответим :)`}</p>
                
                    <nav className={styles.sidebar}>
                        <ul className={styles.social}>
                            <li className={styles.item}>
                                <a href="https://www.instagram.com/caesarscissors/?hl=en" target="_blank" rel="noreferrer">
                                    <img src={social.inst} alt="инстаграм"/>
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="viber://chat?number=380506774905" target="_blank" rel="noreferrer">
                                    <img src={social.viber} alt="вайбер"/>
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="https://t.me/evgeniyCandS" target="_blank" rel="noreferrer">
                                    <img src={social.tlgm} alt="телеграм"/>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </section>
        )
    }
}

export default Contacts;