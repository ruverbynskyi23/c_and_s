import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mainBtn.module.scss';

class MainBtn extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { text } = this.props;
    return(
      <Link className={styles.btn} to="/">
        {text}
      </Link>
    )
  }
}

export default MainBtn;