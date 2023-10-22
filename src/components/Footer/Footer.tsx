import { FC } from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

export const Footer: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <footer className="container">
      <div className="reach">
        <header className="title">
          <h3>{t('footer.addressTitle')}</h3>
        </header>
      </div>
      <div className="timings">
        <header className="title">
          <h3>{t('footer.workHourTitle')}</h3>
        </header>
      </div>
      <div className="feedback">
        <header className="title">
          <h3>{t('footer.feedbackTitle')}</h3>
        </header>
      </div>
    </footer>
  );
};
