import React from 'react';
import Modal from '../Modal/Modal';
import { MainBtn } from '../../components/index';
import styles from './orderModal.module.scss';

const OrderModal = () => {
  return (
    <Modal title="Оформление заказа">
        <div className={styles.formWrapper}>
            <form>
                <fieldset className={styles.userData}>
                    <legend className={styles.legend}>Данные клиента</legend>
                    <label className={styles.personalInfo}>
                        <span className={styles.fieldName}>Имя и фамилия</span>
                        <input className={styles.field} type="name" placeholder="Имя"/>
                    </label>
                    <label className={styles.personalInfo}>
                        <span className={styles.fieldName}>Номер телефона</span>
                        <input className={styles.field} type="phone" placeholder="+38(099)"/>
                    </label>
                    <label className={styles.personalInfo}>
                        <span className={styles.fieldName}>E-mail</span>
                        <input className={styles.field} type="email" placeholder="email@mail.com"/>
                    </label>
                    <label className={styles.personalInfo}>
                        <span className={styles.fieldName}>Коментарий</span>
                        <textarea className={styles.area} name="comments" cols="30" rows="3" placeholder="Укажите детали, если необходимо"></textarea>
                    </label>
                </fieldset>

                <fieldset className={styles.paymentData}>
                    <legend className={styles.legend}>Способ оплаты</legend>
                    <label className={styles.paymentOption}>
                        <input className={styles.radio} type="radio" name="payment"/>
                        <span className={styles.fakeRadio}></span>
                        <span className={styles.radioName}>По предоплате</span>
                    </label>
                    <label className={styles.paymentOption}>
                        <input className={styles.radio} type="radio" name="payment"/>
                        <span className={styles.fakeRadio}></span>
                        <span className={styles.radioName}>Наложенным платежем</span>
                    </label>
                </fieldset>

                <fieldset className={styles.deliveryInfo}>
                    <legend className={styles.legend}>Доставка</legend>
                    <label className={styles.deliveryOption}>
                        <select className={styles.select} name="cities" defaultValue={''}>
                            <option value="" disabled hidden>Выберите город</option>
                            <option className={styles.option} value="Kharkiv">Kharkiv</option>
                            <option className={styles.option} value="Kiev">Kiev</option>
                            <option className={styles.option} value="Lviv">Lviv</option>
                            <option className={styles.option} value="Odessa">Odessa</option>
                        </select>
                    </label>
                    <label className={styles.deliveryOption}>
                        <select className={styles.select} name="post" defaultValue={'NovaPochta'}>
                            <option value="NovaPochta">Новая почта</option>
                            <option className={styles.option} value="UkrPochta">Укр почта</option>
                            <option className={styles.option} value="FedEx">FedEx</option>
                            <option className={styles.option} value="DHL">DHL</option>
                        </select>
                    </label>
                    <label className={styles.deliveryOption}>
                        <select className={styles.select} name="office" defaultValue={'default'}>
                            <option value="default">Отделение</option>
                            <option className={styles.option} value="UkrPochta">№1</option>
                            <option className={styles.option} value="FedEx">№2</option>
                            <option className={styles.option} value="DHL">№3</option>
                        </select>
                    </label>
                </fieldset>

                <fieldset className={styles.userAgreement}>
                    <label className={styles.agreement}>
                        <input className={styles.checkbox} type="checkbox" name="agreement" />
                        <span className={styles.fakeCheckbox}></span>
                        Я согласен(-на) на обработку персональных данных
                    </label>
                </fieldset>
                

                <MainBtn type="submit" text="Заказать"/>

            </form>
        </div>
    </Modal>
  );
};

export default OrderModal;