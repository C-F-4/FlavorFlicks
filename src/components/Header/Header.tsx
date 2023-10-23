import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

export const Header: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>{t('nav.home')}</nav>
  );
};
