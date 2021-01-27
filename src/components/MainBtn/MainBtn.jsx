import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mainBtn.module.scss';

class MainBtn extends React.Component {
  componentDidMount() {
    const { type, id, text, path, status, hover } = this.props;

    if(type === "link") {
      return (
        <Link
          id={id}
          className={`${styles.btn} ${status === id ? styles.active : ''}`}
          to={path}
          onMouseOver={hover}
        >
          {text}
        </Link>
      )
    } else if (type === "submit") {
      return (
        <button
          type="submit"
          className={`${styles.btn} ${styles.submit}`}
        >
          {text}
        </button>
      )
    }

    return;
  }

  render() {
    return(
      <>
        {this.componentDidMount()}
      </>
    )
  }
}

export default MainBtn;