import React from 'react';
import { Link } from 'react-router-dom';
import { btnSymbols } from '../../assets/index';
import styles from './roundBtn.module.scss';

class RoundBtn extends React.Component {
  render() {
    return (
      <Link className={styles.roundBtn} to="/order">
        <svg width="96" height="96">
          <text className={styles.btnText} y="48" x="48" textAnchor="middle" alignmentBaseline="middle">{this.props.text}</text>
          <image href={btnSymbols.arrow} className={styles.btnImage} y="40" x="28"/>
          <circle className={styles.circle} cy="48" cx="48" r="46"/>
        </svg>
      </Link>
    )
  }
}

export default RoundBtn;