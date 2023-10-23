import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Specials.module.scss';

export const Specials: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <header>
        <h3 className={styles.title}>{t('specials.title')}</h3>
      </header>
    </section>
  );
};
