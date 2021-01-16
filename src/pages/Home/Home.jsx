import React from 'react';
import { MainBtn } from '../../components/index';
import styles from './home.module.scss';
import { social, advantages, generalPics } from '../../assets/index';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      activeBtn: 'order'
    }

    this.handleBtnHover = this.handleBtnHover.bind(this);
  }

  handleBtnHover(e) {
    this.setState({activeBtn: e.target.id});
  }

  render() {
    return (
      <>
        <section className={styles.introduction}>
          <div className={styles.container}>
            <h1 className={styles.title}>Парикмахерские ножницы ручной работы</h1>

            <div className={styles.actionBlock}>
              <MainBtn
                id="order"
                text="Заказать"
                path="/"
                status={this.state.activeBtn}
                hover={this.handleBtnHover}
              />
              <MainBtn
                id="detail"
                text="Подробнее"
                path="/"
                status={this.state.activeBtn}
                hover={this.handleBtnHover}
              />
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

        <section className={styles.advantages}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Наши преимущества</h2>

            <div className={styles.wrapper}>
              <figure className={styles.advantageItem}>
                <img src={advantages.handmade} alt="ручная работа"/>
                <figcaption className={styles.caption}>HANDMADE</figcaption>
                <p className={styles.description}>Полностью ручная работа</p>
              </figure>

              <figure className={styles.advantageItem}>
                <img src={advantages.quality} alt="качество"/>
                <figcaption className={styles.caption}>КАЧЕСТВО</figcaption>
                <p className={styles.description}>Уделяем внимание деталям</p>
              </figure>

              <figure className={styles.advantageItem}>
                <img src={advantages.sharpening} alt="заточка"/>
                <figcaption className={styles.caption}>ЗАТОЧКА</figcaption>
                <p className={styles.description}>Мастер точит вручную</p>
              </figure>

              <figure className={styles.advantageItem}>
                <img src={advantages.uniqueness} alt="уникальность"/>
                <figcaption className={styles.caption}>УНИКАЛЬНОСТЬ</figcaption>
                <p className={styles.description}>Можем нанести гравировку</p>
              </figure>
            </div>

          </div>
        </section>

        <section className={styles.history}>
          <div className={styles.container}>

            <figure className={styles.sectionImg}>
              <img className={styles.scissorsImg} src={generalPics.scissors} alt="ножницы"/>
            </figure>

            <div className={styles.textWrapper}>
              <h2 className={styles.sectionTitle}>История<br/>нашего бренда</h2>
              <p className={styles.sectionText}>Мы долго взращивали идею создания украинского бренда парикмахерских ножниц. Без преувеличения работали днем и ночью, мечтая создать инструмент высокого качества, который понравится мастерам.</p>
            </div>

          </div>
        </section>
      </>
    )
  }
}

export default Home;