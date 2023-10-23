import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Gallery.module.scss';

export const Gallery: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <header>
        <h3 className={styles.title}>{t('gallery.title')}</h3>
        <h3 className={styles.subtitle}>{t('gallery.subtitle')}</h3>
      </header>
    </section>
  );
};
