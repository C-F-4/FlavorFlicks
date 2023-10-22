import { FC } from 'react';
import './Copyright.scss';
import { SITE_DATA } from '../../utils/apps.constants';
import { useTranslation } from 'react-i18next';

export const Copyright: FC<{}> = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear(),
    url = SITE_DATA.url;

  return (
    <div className="copybar">
      <span>{t("footer.copy")} &copy; {year} </span>
      <a className="primary" href={url}>{url}</a>
    </div>
  );
};
