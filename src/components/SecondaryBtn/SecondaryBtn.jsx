import React from 'react';
import { Link } from 'react-router-dom';
import { btnSymbols } from '../../assets/index';
import styles from './secondaryBtn.module.scss';

class SecondaryBtn extends React.Component {
  render() {
    const { text, path, type } = this.props;
    const isWhite = type === 'white';

    return(
      <Link className={`${styles.btn} ${isWhite ? styles.white : ''}`} to={path}>
        {text}
        <img
          className={styles.btnImg}
          src={isWhite ? btnSymbols.secondaryBtn2 : btnSymbols.secondaryBtn} alt="символ кнопки"
        />
      </Link>
    )
  }
}

export default SecondaryBtn;