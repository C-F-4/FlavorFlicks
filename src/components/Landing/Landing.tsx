import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './Landing.scss';

export const Landing: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={"landing-container"}>
      <header>
        <h1 className={"title"}>{t('landing.title')}</h1>
        <p className={"subtitle"}>{t('landing.subtitle')}</p>
        <button className={"btn btn-primary"}>{t('landing.cta')}</button>
      </header>
    </section>
  );
};
