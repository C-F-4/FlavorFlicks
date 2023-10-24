import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Apps.module.scss';
import { SvgIcon } from 'src/components/UiComponents/SvgIcon/SvgIcon';
import AppImage from 'src/assets/images/app-1.png';
import { ReactComponent as SvgGooglePlay} from 'src/assets/images/icons/i-playstore.svg';
import { ReactComponent as SvgApplePlay} from 'src/assets/images/icons/i-appstore.svg';

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
        <div className={styles.appLinks}>
          <h3>{t('apps.available')}</h3>
          <SvgIcon svg={SvgGooglePlay} classList={styles.appLink} />
          <SvgIcon svg={SvgApplePlay} classList={styles.appLink} />
        </div>
      </div>
    </section>
  );
};
