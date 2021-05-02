import React from 'react';
import { MainBtn, SecondaryBtn, RoundBtn, Slider } from '../../components/index';
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
            <p className={styles.subtitle}>Порадуйте себя качественным инструментом украинского производителя. Наши ножницы пропитаны любовью.</p>

            <div className={styles.actionBlock}>
              <MainBtn
                type="link"
                id="order"
                text="Заказать"
                path="/order"
                status={this.state.activeBtn}
                hover={this.handleBtnHover}
              />
              <MainBtn
                type="link"
                id="detail"
                text="Подробнее"
                path="/about"
                status={this.state.activeBtn}
                hover={this.handleBtnHover}
              />
            </div>

            <nav className={styles.sidebar}>
              <ul>
                <li className={styles.link}>
                  <a href="https://www.instagram.com/caesarscissors/?hl=en" target="_blank" rel="noreferrer">
                    <img src={social.inst} alt="instagram"/>
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="viber://chat?number=380506774905" target="_blank" rel="noreferrer">
                    <img src={social.viber} alt="viber"/>
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="https://t.me/evgeniyCandS" target="_blank" rel="noreferrer">
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

              <SecondaryBtn text="Подробнее" path="/about"/>
            </div>

          </div>
        </section>

        <section className={styles.feature}>
          <div className={styles.container}>
            <div className={styles.textWrapper}>
              <h2 className={styles.sectionTitle}>Особенности инструмента</h2>
              <p className={styles.sectionText}>Ножницы ручной работы от украинского бренда. Размеры от 4,5 до 6,5. Есть со съемным и литым упорами. Инструмент соответствует моделям 2 класса. Изготовлены из нержавеющей стали 40х13 (твердость 56 HR).</p>

              <SecondaryBtn text="Весь ассортимент" path="/order"/>
            </div>

            <RoundBtn text="01." />

            <figure className={styles.sectionImg}>
              <img src={generalPics.scissors2} alt="ножницы"/>
            </figure>

            <RoundBtn text="02." />

          </div>
        </section>

        <section className={styles.inspiration}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Фото для вдохновения</h2>

            <div className={styles.sliderWrapper}>
              <Slider />

              <div className={styles.spacer}>
                <span className={styles.spacerText}>scissors handmade</span>
              </div>
            </div>

            <div className={styles.btnWrapper}>
                <SecondaryBtn text="Смотреть все" path="/gallery"/>
            </div>

          </div>
        </section>
      </>
    )
  }
}

export default Home;