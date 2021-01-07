import React from 'react';
import styles from './header.module.scss';
import { generalPics } from '../../assets/index';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={generalPics.logo} alt="логотип"/>
          </div>

          <ul>
            <li className={styles.listItem}>
              <a href="tel:+380994657834" className={styles.phone}>+380994657834</a>
            </li>
            <li className={styles.listItem}>
              <a href="tel:+380994657834" className={styles.phone}>+380994657834</a>
            </li>
          </ul>

          <button className={styles.burgerMenu}>
            <div className={styles.middleLine}></div>
          </button>
        </div>
      </header>
    )
  }
}

export default Header;