import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { NavMain } from '../NavMain/NavMain';

export const Header: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <NavMain />
  );
};
