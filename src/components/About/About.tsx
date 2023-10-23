import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

export const About: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <header>
        <h3 className={styles.title}>{t('about.title')}</h3>
        <h3 className={styles.subtitle}>{t('about.subtitle')}</h3>
      </header>
    </section>
  );
};
