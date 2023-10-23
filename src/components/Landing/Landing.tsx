import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Landing.module.scss';

export const Landing: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <header>
        <h1 className={styles.title}>{t('landing.title')}</h1>
        <p className={styles.subtitle}>{t('landing.subtitle')}</p>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>{t('landing.cta')}</button>
      </header>
    </section>
  );
};
