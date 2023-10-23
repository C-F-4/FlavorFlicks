import { FC } from 'react';
import styles from './Apps.module.scss';
import AppImage from './../../assets/images/app-1.png';
import { useTranslation } from 'react-i18next';

export const Apps: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div>
        <img src={AppImage} alt={t('apps.mobile')} />
      </div>
      <div>
        <header>
          <h3 className={styles.title}>{t('apps.announce')}</h3>
          <h1 className={styles.subtitle}>{t('apps.mobile')}</h1>
        </header>
        <div>
          <h3>{t('apps.available')}</h3>
        </div>
      </div>
    </section>
  );
};
