import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.scss';

class Menu extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
    document.querySelector('.App').style.paddingRight = `${this.props.paddingValue}px`;
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
    document.querySelector('.App').style.paddingRight = "0px";
  }

  render() {
    return (
      <div className={styles.menu} onClick={this.props.handleClick}>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.listItem}>
              <Link className={styles.link} to="/">Главная</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} to="/about">Наша история</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} to="/order">Ассортимент</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} to="/gallery">Галерея</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} to="/faqs">Оплата и доставка</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;