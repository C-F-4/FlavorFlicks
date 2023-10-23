import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Menu.module.scss';

export const Menu: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <header>
        <h3 className={styles.title}>{t('menu.title')}</h3>
        <h3 className={styles.subtitle}>{t('menu.subtitle')}</h3>
      </header>
    </section>
  );
};
