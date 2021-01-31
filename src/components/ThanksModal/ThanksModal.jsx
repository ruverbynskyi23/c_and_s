import React from 'react';
import { Modal, SecondaryBtn } from '../../components/index';
import styles from './thanksModal.module.scss';

const ThanksModal = ({ closeModal }) => {
  return (
    <Modal type="thanks" title="Благодарим за Ваш выбор!" closeModal={closeModal}>
      <>
        <p className={styles.modalText}>{`Наш менеджер уже связывается с Вами:)`}</p>
        <SecondaryBtn text="На главную" path="/" type="white"/>
      </>
    </Modal>
  )
}

export default ThanksModal;