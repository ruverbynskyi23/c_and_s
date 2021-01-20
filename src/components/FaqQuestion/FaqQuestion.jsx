import React from 'react';
import styles from './faqQuestion.module.scss';

class FaqQuestion extends React.Component {
    render() {
        return (
            <li className={`${styles.listItem} ${this.props.item.open === true ? styles.open : ''}`}>
                <div className={styles.questionHeader}>
                    <h3 className={styles.question}>{this.props.item.question}</h3>
                    <button
                        className={styles.openAnswerBtn}
                        onClick={() => {this.props.handleClick(this.props.index)}}
                    >
                    </button>
                </div>
                <div className={`${styles.answer}`}>
                    <p>{this.props.item.answer}</p>
                </div>
            </li>
        )
    }
}

export default FaqQuestion;