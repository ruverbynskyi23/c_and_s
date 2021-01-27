import React, { useState, useEffect }from 'react';
import styles from './modal.module.scss';

const Modal = ({ children, title}) => {
  const [ height, setHeight ] = useState(null);

  useEffect(() => {

    setTimeout(() => { setHeight(document.documentElement.scrollHeight) }, 50);
  }, []);

  return (
    <div className={styles.layout} style={{height: height}}>
      <div className={styles.modal}>
        <button className={styles.closeBtn}></button>
        <h3 className={styles.modalTitle}>{title}</h3>
        {children}
      </div>
    </div>
  )
};

export default Modal;
