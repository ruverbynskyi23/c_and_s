import React from 'react';
import { MainBtn } from '../../components/index';
import styles from './home.module.scss';
import { social } from '../../assets/index';

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
      </>
    )
  }
}

export default Home;