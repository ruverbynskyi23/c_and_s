import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.scss';

class Menu extends React.Component {
  render() {
    return (
      <div className={styles.menu}>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.listItem}>
              <Link className={styles.link}>Главная</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link}>Наша история</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link}>Ассортимент</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link}>Галерея</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link}>Оплата и доставка</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;