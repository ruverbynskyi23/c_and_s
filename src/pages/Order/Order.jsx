import React from 'react';
import { product } from '../../assets/index';
import styles from './order.module.scss';

class Order extends React.Component {
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
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Order;