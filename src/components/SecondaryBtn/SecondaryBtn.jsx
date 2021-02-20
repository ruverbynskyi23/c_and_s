import React from 'react';
import { Link } from 'react-router-dom';
import styles from './secondaryBtn.module.scss';

class SecondaryBtn extends React.Component {
  render() {
    const { text, path, type } = this.props;
    const isWhite = type === 'white';

    return(
      <Link className={`${styles.btn} ${isWhite ? styles.white : ''}`} to={path}>
        {text}
      </Link>
    )
  }
}

export default SecondaryBtn;