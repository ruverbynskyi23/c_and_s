import React, { useState, useEffect }from 'react';
import styles from './modal.module.scss';

const Modal = ({ children, type, title, closeModal }) => {
  const [ height, setHeight ] = useState(null);

  useEffect(() => {

    setTimeout(() => { setHeight(document.documentElement.scrollHeight) }, 50);
  }, []);

  return (
    <div className={styles.layout} style={{height: height}} onClick={closeModal}>
      <div className={`${styles.modal} ${type === 'thanks' ? styles.thanks : ''}`}>
        <button className={styles.closeBtn} onClick={closeModal}></button>
        <h3 className={styles.modalTitle}>{title}</h3>
        {children}
      </div>
    </div>
  )
};

export default Modal;
