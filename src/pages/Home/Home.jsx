import React from 'react';
import styles from './home.module.scss';
import { social } from '../../assets/index';

class Home extends React.Component {
  render() {
    return (
      // <div className={styles.container}>
      //   <section className={styles.introduction}>
      //     <h1>Парикмахерские ножницы ручной работы</h1>
      //     <div className={styles.actionBlock}>
      //       <button>Заказать</button>
      //       <button>Подробнее</button>
      //     </div>
      //   </section>
      // </div>
      <>
        <section className={styles.introduction}>
          <div className={styles.container}>
            <h1 className={styles.title}>Парикмахерские ножницы ручной работы</h1>

            <div className={styles.actionBlock}>
              <button>Заказать</button>
              <button>Подробнее</button>
            </div>

            <nav className={styles.sidebar}>
              <ul>
                <li className={styles.link}>
                  <a href="#">
                    <img src={social.inst} alt="instagram"/>
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="#">
                    <img src={social.viber} alt="viber"/>
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="#">
                    <img src={social.tlgm} alt="telegram"/>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </section>
      </>
    )
  }
}

export default Home;