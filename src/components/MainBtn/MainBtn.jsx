import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mainBtn.module.scss';

class MainBtn extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { id, text, path, status, hover } = this.props;
    
    return(
      <Link
        id={id}
        className={`${styles.btn} ${status === id ? styles.active : ''}`}
        path={path}
        onMouseOver={hover}
      >
        {text}
      </Link>
    )
  }
}

export default MainBtn;