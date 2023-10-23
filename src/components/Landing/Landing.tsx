import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Landing.module.scss';

export const Landing: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <header>
        <h2 className={styles.title}>{t('landing.title')}</h2>
        <h3 className={styles.subtitle}>{t('landing.subtitle')}</h3>
      </header>
    </section>
  );
};
