import React from 'react';
import { MainBtn } from '../../components/index';
import styles from './notFound.module.scss';

class NotFound extends React.Component {
  constructor() {
    super();

    this.state = {
      activeBtn: 'catalog'
    }

    this.handleBtnHover = this.handleBtnHover.bind(this);
  }

  handleBtnHover(e) {
    this.setState({activeBtn: e.target.id});
  }

  render() {
    return (
      <section className={styles.notFound}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>404</h2>
          <p className={styles.sectionText}>Опаньки, что-то пошло не так</p>

          <div className={styles.sectionBlock}>
            <MainBtn type="link" id="catalog" text="В каталог" path="/order" status={this.state.activeBtn} hover={this.handleBtnHover} />
            <MainBtn type="link" id="home" text="На главную" path="/" status={this.state.activeBtn} hover={this.handleBtnHover} />
          </div>
        </div>
      </section>
    )
  }
}

export default NotFound;