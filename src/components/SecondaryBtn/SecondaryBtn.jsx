import React from 'react';
import { Link } from 'react-router-dom';
import { btnSymbols } from '../../assets/index';
import styles from './secondaryBtn.module.scss';

class SecondaryBtn extends React.Component {
  render() {
    const { text, path} = this.props;

    return(
      <Link className={styles.btn} to={path}>
        {text}
        <img className={styles.btnImg} src={btnSymbols.secondaryBtn} alt="символ кнопки"/>
      </Link>
    )
  }
}

export default SecondaryBtn;