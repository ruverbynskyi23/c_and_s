import React from 'react';
import { aboutUs } from '../../assets/index';
import styles from './about.module.scss';

class About extends React.Component {
    constructor() {
        super();

        this.state = {
            openImgId: null
        }
        
        this.expendImg = this.expendImg.bind(this);
    }

    expendImg(e) {
        const target = e.target,
            { openImgId } = this.state;

        if(target.id === openImgId) {
            this.setState({openImgId: null});
            return;
        }

        this.setState({openImgId: e.target.id}, () => {
            console.log(this.state);
        })
    }
    render() {
        const accordionImgs = [];
    
        for(let i = 0; i < 4; i++) {
          accordionImgs.push(
            <div
              key={`img${i}`}
              className={`${styles.imgWrapper} ${this.state.openImgId === `${i + 3}` ? styles.open : ''}`}
              onClick={this.expendImg}
            >
              <figure>
                <img id={`${i + 3}`} src={aboutUs[`pic${i + 3}`]} alt={`pic${i + 3}`} className={styles.wideImg}/>
              </figure>
            </div>
          )
        }
    
        return(
            <article className={styles.aboutUs}>
                <div className={styles.container}>
        
                <section className={styles.ourStart}>
                    <figure className={styles.sectionImg}>
                        <img src={aboutUs['pic1']} alt="шлифовка ножниц"/>
                    </figure>

                    <div className={styles.textContent}>
                        <h2 className={styles.sectionTitle}>Все начинается с идеи</h2>
                        <p className={styles.sectionText}>{`В один прекрасный солнечный день ( а может быть это был вовсе и не солнечный день) к нашему основателю Евгению пришла идея: а что если мы создадим свой отечественный бренд парикмахерских ножниц, который не будет уступать качеством европейскому? Ножницы ручной работы с проработкой всех деталей, аккуратные и удобные в работе, при этом доступные по цене. Так начались наши первые шаги.`}</p>
                    </div>
                </section>
        
                <section className={styles.ourResearch}>
                    <div className={styles.textContent}>
                        <h2 className={styles.sectionTitle}>Изучаем вопрос</h2>
                        <p className={styles.sectionText}>{`Недели и месяцы проходили в процессе постоянного сбора информации, изучения всех этапов создания инструмента, подбора материалов и проработки первых эскизов наших парикмахерских ножниц. Это было время аккумулирования наших сил, по крупицам мы собирали материал, закупали оборудование и готовили нашу маленькую мастерскую для создания чуда-первого прототипа будущих парикмахерских ножниц украинского бренда С&S.`}</p>
                    </div>

                    <figure className={styles.sectionImg}>
                        <img src={aboutUs['pic2']} alt="сверление ножниц"/>
                    </figure>
                </section>
        
                <section className={styles.manufacturing}>
                    <div className={styles.textContent}>
                        <h2 className={styles.sectionTitle}>Переделываем пока не получим идеальный результат</h2>
                        <p className={styles.sectionText}>Нельзя сказать что это была простая работа, мы долго и упорно трудились, преодолевая много сложностей и открывая новые знания о нашем инструменте. </p>
                    </div>
        
                    <div className={styles.accordion}>
                        {accordionImgs}
                    </div>
                </section>
        
                <section className={styles.ourResult}>
                    <div className={styles.textContent}>
                        <h2 className={styles.sectionTitle}>{`Рассказываем миру о нас :)`}</h2>
                        <p className={styles.sectionText}>{`И вот наконец-то наша мечта осуществиласьи мы очень рады возможности поделиться с вами тем, что у нас получилось. Ножницы ручной работы от украинского бренда C&S, 6 размеров инструмента в различных цветовых вариациях. Легкие, острые и проворные :) И уже очень скоро мы так же выпустим линейку филлировочных ножниц, будем держать вас в курсе.`}</p>
                    </div>
                    <figure className={styles.sectionImg}>
                        <img src={aboutUs['pic7']} alt="готовые ножницы"/>
                    </figure>
                </section>
                </div>
            </article>
        )
    }
}

export default About;