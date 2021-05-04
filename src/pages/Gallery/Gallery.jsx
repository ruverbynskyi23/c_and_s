import React from 'react';
import { gallery } from '../../assets/index';
import styles from './gallery.module.scss';

class Gallery extends React.Component {
    render() {
        const pics = [];

        for(const key in gallery) {
          pics.push(
            <figure className={styles.picture} key={key}>
              <img src={gallery[key]} alt={key}/>
            </figure>
          )
        }

        console.log(pics);

        return(
            <section className={styles.gallery}>
                <div className={styles.container}>

                    <h2 className={styles.sectionTitle}>Место для вдохновения</h2>
                    
                    <div className={`${styles.galleryBlock} ${styles.sixthBlock}`}>
                        {pics.splice(-2, 2)}
                    </div>

                    <div className={`${styles.galleryBlock} ${styles.fstBlock}`}>
                        {pics.splice(0, 4)}
                    </div>

                    <div className={`${styles.galleryBlock} ${styles.sndBlock}`}>
                        {pics.splice(0, 3)}
                    </div>

                    <div className={`${styles.galleryBlock} ${styles.thdBlock}`}>
                        {pics.splice(0, 4)}
                    </div>

                    <div className={`${styles.galleryBlock} ${styles.frthBlock}`}>
                        {pics.splice(0, 2)}
                    </div>

                    <div className={`${styles.galleryBlock} ${styles.fthBlock}`}>
                        {pics.splice(0, 3)}
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Gallery;