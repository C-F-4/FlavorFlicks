import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss';
import { ABOUT } from 'src/constants/about.constants';

export const About: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={"about-section"}>
      <div className={"container"}>
        <div className={"column img-wrapper"}>
          <div className={"about1"}></div>
          <div className={"about2"}></div>
        </div>
        <div className={"column"}>
          <header>
            <h3 className={"title"}>{t('about.title')}</h3>
            <h3 className={"subtitle"}>{t('about.subtitle')}</h3>
          </header>
          <div className={"summary"}>
            <p>{ABOUT.summary.line1}</p>
            <p>{ABOUT.summary.line2}</p>
            <button className={"btn btn-secondary"}>{t('about.know')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
