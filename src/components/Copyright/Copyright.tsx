import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Copyright.module.scss';
import { SITE_DATA } from '../../constants/apps.constants';

export const Copyright: FC<{}> = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear(),
    url = SITE_DATA.url;

  return (
    <div className={styles.copybar}>
      <span>{t("footer.copy")} &copy; {year} </span>
      <a className={styles.primary} href={url}>{url}</a>
    </div>
  );
};
