import React from 'react';
import { product } from '../../assets/index';
// import { OrderModal, ThanksModal } from '../../components/index';
import styles from './order.module.scss';

class Order extends React.Component {
    constructor() {
        super();

        this.state = {
            // isModalOpen: false,
            // isOrderComplete: true,
        };

        // this.closeModal = this.closeModal.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // closeModal(e) {
    //     const target = e.target;

    //     if(target.className.includes('layout') || target.className.includes('closeBtn')) {
    //         this.setState({
    //             isModalOpen: false,
    //             isOrderComplete: false
    //         });
    //     }
        
    //     return;
    // }

    handleFormSubmit(e) {
        e.preventDefault();
        const { history } = this.props;
        history.push('/coming-soon');
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

                            <form className={styles.orderForm} onSubmit={this.handleFormSubmit}>
                                <fieldset>
                                    <label className={styles.type}>
                                        <input className={styles.radio} type="radio" name="type" value="removable" defaultChecked/>
                                        <span className={styles.fakeRadio}>Съемный упор</span>
                                    </label>
                                    <label className={styles.type}>
                                        <input className={styles.radio} type="radio" name="type" value="cast"/>
                                        <span className={styles.fakeRadio}>Литой упор</span>
                                    </label>
                                </fieldset>

                                <fieldset className={styles.prodColor}>
                                    <legend className={styles.legend}>Цвет:</legend>
                                    <label className={styles.color}>
                                        <input className={styles.radio} type="radio" name="color" value="gold"/>
                                        <span className={`${styles.fakeRadio} ${styles.gold}`}></span>
                                    </label>
                                    <label className={styles.color}>
                                        <input className={styles.radio} type="radio" name="color" value="gray" defaultChecked/>
                                        <span className={`${styles.fakeRadio} ${styles.silver}`}></span>
                                    </label>
                                    <label className={styles.color}>
                                        <input className={styles.radio} type="radio" name="color" value="black"/>
                                        <span className={`${styles.fakeRadio} ${styles.matSilver}`}></span>
                                    </label>
                                </fieldset>

                                <fieldset className={styles.prodSize}>
                                    <legend className={styles.legend}>Размер:</legend>
                                    <label className={styles.size}>
                                        <input className={styles.radio} type="radio" name="size" value="4.5cm"/>
                                        <span className={styles.fakeRadio}>4.5см</span>
                                    </label>
                                    <label className={styles.size}>
                                        <input className={styles.radio} type="radio" name="size" value="5.0cm" defaultChecked/>
                                        <span className={styles.fakeRadio}>5.0см</span>
                                    </label>
                                    <label className={styles.size}>
                                        <input className={styles.radio} type="radio" name="size" value="5.5cm"/>
                                        <span className={styles.fakeRadio}>5.5см</span>
                                    </label>
                                    <label className={styles.size}>
                                        <input className={styles.radio} type="radio" name="size" value="6.0cm"/>
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

                    {/* {this.state.isModalOpen ? <OrderModal closeModal={this.closeModal}/> : ''}
                    {this.state.isOrderComplete ? <ThanksModal closeModal={this.closeModal} /> : ''} */}

                </div>
            </section>
        )
    }
}

export default Order;