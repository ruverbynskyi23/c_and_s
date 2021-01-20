import React from 'react';
import { FaqQuestions } from '../../components/index';
import styles from './faq.module.scss';

class Faq extends React.Component {
    constructor() {
        super();
    
        this.state = {
          faqs: [
            {
              question: 'Как сделать заказ?',
              answer: 'Некоторые продавцы ножниц громко заявляют о том, что их ножницы, мол, точат себя сами. Якобы одно лезвие сделано из более твердого',
              open: false
            },
            {
              question: 'Как сделать заказ?',
              answer: 'Некоторые продавцы ножниц громко заявляют о том, что их ножницы, мол, точат себя сами. Якобы одно лезвие сделано из более твердого',
              open: false
            },
            {
              question: 'Как сделать заказ?',
              answer: 'Некоторые продавцы ножниц громко заявляют о том, что их ножницы, мол, точат себя сами. Якобы одно лезвие сделано из более твердого',
              open: false
            },
            {
              question: 'Как сделать заказ?',
              answer: 'Некоторые продавцы ножниц громко заявляют о том, что их ножницы, мол, точат себя сами. Якобы одно лезвие сделано из более твердого',
              open: false
            }
          ]
        }

        this.openAnswer = this.openAnswer.bind(this);
    }
    
    openAnswer(i) {
        const { faqs } = this.state;

        faqs.forEach((item, index) => {
            if(i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }
        });

        this.setState({faqs: faqs});
    }
    
    render () {
        const { faqs } = this.state;

        return (
            <section className={styles.faqs}>
                <div className={styles.container}>

                    <h2 className={styles.sectionTitle}>Доставка и оплата</h2>

                    <ul className={styles.questionList}>
                        {faqs.map((item, i) => {
                            return <FaqQuestions item={item} index={i} handleClick={this.openAnswer} key={i}/>
                        })}
                    </ul>

                </div>
            </section>    
        )
    }
}

export default Faq;