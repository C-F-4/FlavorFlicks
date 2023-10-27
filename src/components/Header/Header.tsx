import { FC } from 'react';
import './Header.scss';
import { NavMain } from 'src/components/NavMain/NavMain';
import { Socials } from 'src/components/Socials/Socials';
import { SvgIcon } from 'src/components/UiComponents/SvgIcon/SvgIcon';
import { SITE_DATA } from 'src/constants/apps.constants';
import { ASSETS } from 'src/constants/assets.constants';
import { useTranslation } from 'react-i18next';

export const Header: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className={"header-bar"}>
      <div className={"logo"}><img src={SITE_DATA.logoHighRes} className={"logo-img"} /></div>
      <div className={"row address"}>
        <div className="site-hours">
          <SvgIcon svg={ASSETS.clockIcon} classList="icon" />
          <span>{t('nav.order')} {SITE_DATA.timings.online}</span>
        </div>
        <div className={"site-contact"}>
          <SvgIcon svg={ASSETS.phoneIcon} classList="icon" />
          <span>{SITE_DATA.support.phone}</span>
        </div>
        <div className={"site-gap"}></div>
        <Socials classlist="icons" />
      </div>
      <div className={"row nav-bar-wrapper"}>
        <NavMain />
      </div>
    </div>
  );
};
