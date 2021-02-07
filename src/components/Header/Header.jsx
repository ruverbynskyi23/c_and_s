import React from 'react';
import { Menu } from '../index';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { generalPics } from '../../assets/index';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isMenuOpen: false,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick () {
    const { isMenuOpen } = this.state;

    this.setState({isMenuOpen: !isMenuOpen}, () => {
      console.log(this.state.isMenuOpen);
    })
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.container}>
          <Link className={styles.logo} to="/">
            <img src={generalPics.logo} alt="логотип"/>
          </Link>

          <ul className={styles.contactList}>
            <li className={styles.listItem}>
              <a href="tel:+380994657834" className={styles.phone}>+380994657834</a>
            </li>
            <li className={styles.listItem}>
              <a href="tel:+380994657834" className={styles.phone}>+380994657834</a>
            </li>
          </ul>

          <button
            className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`}
            onClick={this.handleMenuClick}
          >
            <div className={styles.middleLine}></div>
          </button>
        </div>

        {isMenuOpen ? <Menu /> : ''}
      </header>
    )
  }
}

export default Header;