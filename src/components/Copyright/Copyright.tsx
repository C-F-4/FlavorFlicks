import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './Copyright.scss';
import { SITE_DATA } from 'src/constants/apps.constants';

export const Copyright: FC<{}> = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear(),
    url = SITE_DATA.url;

  return (
    <div className={"copy-bar"}>
      <span>{t("footer.copy")} &copy; {year} </span>
      <a className={"primary"} href={url}>{url}</a>
    </div>
  );
};
