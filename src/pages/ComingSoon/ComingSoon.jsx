import styles from './comingSoon.module.scss';

const ComingSoon = () => {
    return (
        <section className={styles.coming}>
            <div className={styles.container}>
                <h2 className={styles.title}>Для заказа ножниц свяжитесь с нами<br/>по указанным контактам:</h2>

                <ul className={styles.contactList}>
                    <li className={styles.contact}>
                        <span>MTC: </span>
                        <a className={styles.link} href="tel:+380994657834">+380994657834</a>
                    </li>
                    <li className={styles.contact}>
                        <span>Telegram: </span>
                        <a className={styles.link} href="https://t.me/evgeniyCandS" target="_blank" rel="noreferrer">@evgeniyCandS</a>
                    </li>
                    <li className={styles.contact}>
                        <span>Instagram: </span>
                        <a className={styles.link} href="https://www.instagram.com/caesarscissors/?hl=en" target="_blank" rel="noreferrer">caesarscissors</a>
                    </li>
                </ul>

                <p className={styles.message}>Мы еще работаем над сайтом, но Совсем скоро заказать ножницы можно будет онлайн :)</p>
            </div>
        </section>
    )
};

export default ComingSoon;