import React from 'react';
import styles from './faq.module.scss';

class Faq extends React.Component {    
    render () {
        return (
            <section className={styles.faqs}>
                <div className={styles.container}>

                    <h2 className={styles.sectionTitle}>Доставка и оплата</h2>

                </div>
            </section>
        )
    }
}

export default Faq;