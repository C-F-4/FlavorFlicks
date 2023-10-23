import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';
import { ABOUT } from 'src/constants/about.constants';
import ImageAbout1 from 'src/assets/images/image-about-1.png';
import ImageAbout2 from 'src/assets/images/image-about-2.png';

export const About: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.split}>
        <img src={ImageAbout1} />
        <img src={ImageAbout2} />
      </div>
      <div className={styles.split}>
        <header>
          <h3 className={styles.title}>{t('about.title')}</h3>
          <h3 className={styles.subtitle}>{t('about.subtitle')}</h3>
        </header>
        <div>
          <p>{ABOUT.summary.line1}</p>
          <p>{ABOUT.summary.line2}</p>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>{t('about.know')}</button>
        </div>
      </div>
    </section>
  );
};
