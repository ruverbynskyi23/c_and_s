import React from 'react';
import { product } from '../../assets/index';
import { OrderModal } from '../../components/index';
import styles from './order.module.scss';

class Order extends React.Component {
    constructor() {
        super();

        this.state = {
            isModalOpen: true,
        };

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(e) {
        const target = e.target;

        if(target.className.includes('layout') || target.className.includes('closeBtn')) {
            this.setState({isModalOpen: false});
        }
        
        return;
    }

    render() {
        return (
            <section className={styles.order}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Наш ассортимент</h2>

                    <div className={styles.orderBlock}>
                        <figure className={styles.productImg}>
                            <img src={product.pic1} alt="picture1" className={styles.img}/>
                        </figure>


                        <div className={styles.productInfo}>
                            <h3 className={styles.name}>Ножницы парикмахерские со съемным упором</h3>
                            <p className={styles.description}>Некоторые продавцы ножниц громко заявляют о том, что их ножницы, мол, точат себя сами. Якобы одно лезвие сделано из более твердого </p>

                            <form className={styles.orderForm}>
                                <fieldset>
                                    <label className={styles.type}>
                                        <input className={styles.radio} type="radio" name="type" value="съемный упор"/>
                                        <span className={styles.fakeRadio}>Съемный упор</span>
                                    </label>
                                    <label className={styles.type}>
                                        <input className={styles.radio} type="radio" name="type" value="литой упор"/>
                                        <span className={styles.fakeRadio}>Литой упор</span>
                                    </label>
                                </fieldset>

                                <fieldset className={styles.prodColor}>
                                    <legend className={styles.legend}>Цвет:</legend>
                                    <label className={styles.color}>
                                        <input className={styles.radio} type="radio" name="color" value="золотой"/>
                                        <span className={`${styles.fakeRadio} ${styles.gold}`}></span>
                                    </label>
                                    <label className={styles.color}>
                                        <input className={styles.radio} type="radio" name="color" value="серый"/>
                                        <span className={`${styles.fakeRadio} ${styles.silver}`}></span>
                                    </label>
                                    <label className={styles.color}>
                                        <input className={styles.radio} type="radio" name="color" value="черный"/>
                                        <span className={`${styles.fakeRadio} ${styles.matSilver}`}></span>
                                    </label>
                                </fieldset>

                                <fieldset className={styles.prodSize}>
                                    <legend className={styles.legend}>Размер:</legend>
                                    <label className={styles.size}>
                                        <input className={styles.radio} type="radio" name="size" value="4.5см"/>
                                        <span className={styles.fakeRadio}>4.5см</span>
                                    </label>
                                    <label className={styles.size}>
                                        <input className={styles.radio} type="radio" name="size" value="5.0см"/>
                                        <span className={styles.fakeRadio}>5.0см</span>
                                    </label>
                                    <label className={styles.size}>
                                        <input className={styles.radio} type="radio" name="size" value="5.5см"/>
                                        <span className={styles.fakeRadio}>5.5см</span>
                                    </label>
                                    <label className={styles.size}>
                                        <input className={styles.radio} type="radio" name="size" value="6.0см"/>
                                        <span className={styles.fakeRadio}>6.0см</span>
                                    </label>
                                    <label className={styles.size}>
                                        <input className={styles.radio} type="radio" name="size" value="6.5см"/>
                                        <span className={styles.fakeRadio}>6.5см</span>
                                    </label>
                                </fieldset>

                                <fieldset className={styles.options}>
                                    <label className={styles.option}>
                                        <input className={styles.checkbox} type="checkbox" value="гравировка"/>
                                        <span className={styles.fakeCheckbox}></span>
                                        <span className={styles.text}>Хочу гравировку</span>
                                    </label>
                                    <label className={styles.option}>
                                        <input className={styles.checkbox} type="checkbox" value="чехол"/>
                                        <span className={styles.fakeCheckbox}></span>
                                        <span className={styles.text}>Хочу чехол</span>
                                    </label>
                                </fieldset>
                                

                                <div className={styles.actionBlock}>
                                    <span className={styles.price}>700 грн.</span>
                                    <button className={styles.submitBtn}>Заказать</button>
                                </div>
                            </form>
                        </div>

                    </div>

                    {this.state.isModalOpen ? <OrderModal closeModal={this.closeModal}/> : ''}

                </div>
            </section>
        )
    }
}

export default Order;