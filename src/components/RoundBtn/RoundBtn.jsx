import React from 'react';
import { Link } from 'react-router-dom';
import { btnSymbols } from '../../assets/index';
import styles from './roundBtn.module.scss';

class RoundBtn extends React.Component {
  render() {
    return (
      <Link className={styles.roundBtn} to="/order">
        <svg className={styles.svgBlock}>
          <text className={styles.btnText} textAnchor="middle" alignmentBaseline="middle">{this.props.text}</text>
          <image href={btnSymbols.arrow} className={styles.btnImage}/>
          <circle className={styles.circle}/>
        </svg>
      </Link>
    )
  }
}

export default RoundBtn;