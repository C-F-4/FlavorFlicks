import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './Landing.scss';
import { Button } from 'src/components/UiComponents/Button/Button';

export const Landing: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={"landing-container"}>
      <header>
        <h1 className={"title"}>{t('landing.title')}</h1>
        <p className={"subtitle"}>{t('landing.subtitle')}</p>
        <Button variant="primary">{t('landing.cta')}</Button>
      </header>
    </section>
  );
};
