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
      scrollWidth: null,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    const clientWidth = document.body.clientWidth,
          innerWidth = window.innerWidth;

    this.setState({scrollWidth: innerWidth - clientWidth});
  }

  handleMenuClick (e) {
    const { isMenuOpen } = this.state,
          target = e.target;
    
    if(target.className.includes('burgerMenu') || target.className.includes('link')) {
      this.setState({isMenuOpen: !isMenuOpen})
    }

    return;
  }


  render() {
    const { isMenuOpen, scrollWidth } = this.state;
    const { darkTheme } = this.props;

    return (
      <header
        className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''} ${darkTheme ? styles.dark : ''}`}
        style={isMenuOpen ? {paddingRight: scrollWidth + 'px'} : {}}
      >
        <div className={styles.container}>
          <Link className={styles.logo} to="/">
            <img src={generalPics.logo} alt="логотип"/>
          </Link>

          <ul className={styles.contactList}>
            <li className={styles.listItem}>
              <a href="tel:+380684919005" className={styles.phone}>+380684919005</a>
            </li>
            <li className={styles.listItem}>
              <a href="tel:+380937278665" className={styles.phone}>+380937278665</a>
            </li>
          </ul>

          <button
            className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`}
            onClick={this.handleMenuClick}
          >
            <div className={styles.middleLine}></div>
          </button>
        </div>

        {isMenuOpen ? <Menu paddingValue={scrollWidth} handleClick={this.handleMenuClick} /> : ''}
      </header>
    )
  }
}

export default Header;