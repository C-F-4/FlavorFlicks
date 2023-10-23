import { FC } from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

export const Footer: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.reach}>
        <header>
          <h3 className={styles.title}>{t('footer.addressTitle')}</h3>
        </header>
      </div>
      <div className={styles.timings}>
        <header>
          <h3 className={styles.title}>{t('footer.workHourTitle')}</h3>
        </header>
      </div>
      <div className={styles.feedback}>
        <header>
          <h3 className={styles.title}>{t('footer.feedbackTitle')}</h3>
        </header>
      </div>
    </footer>
  );
};
