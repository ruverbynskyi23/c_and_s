import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { generalPics } from '../../assets/index';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <Link className={styles.logo} to="/">
            <img src={generalPics.logo} alt="логотип"/>
          </Link>

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