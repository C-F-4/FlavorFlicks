import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './Apps.scss';
import { SvgIcon } from 'src/components/UiComponents/SvgIcon/SvgIcon';
import AppImage from 'src/assets/images/app-1.png';
import { ASSETS } from 'src/constants/assets.constants';

export const Apps: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={"apps-container"}>
      <div className={"column"}>
        <img src={AppImage} alt={t('apps.mobile')} />
      </div>
      <div className={"column"}>
        <header>
          <h3 className={"title"}>{t('apps.announce')}</h3>
          <h1 className={"subtitle"}>{t('apps.mobile')}</h1>
        </header>
        <div className={"app-links"}>
          <h3>{t('apps.available')}</h3>
          <SvgIcon svg={ASSETS.gplayIcon} classList={"app-link"} />
          <SvgIcon svg={ASSETS.aplayIcon} classList={"app-link"} />
        </div>
      </div>
    </section>
  );
};
