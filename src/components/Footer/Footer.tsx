import { FC } from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import { Socials } from 'src/components/Socials/Socials';
import { SITE_DATA } from 'src/constants/apps.constants';
import { Input } from 'src/components/UiComponents/Input/Input';
import { Button } from 'src/components/UiComponents/Button/Button';

export const Footer: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <footer className={"footer-container"}>
      <div className={"column reach"}>
        <header className={"column-head"}>
          <h3 className={"title"}>{t('footer.addressTitle')}</h3>
        </header>
        <address className={"column-body"}>
          <p className={"address"}>{SITE_DATA.address.line1}</p>
          <p className={"address"}>{SITE_DATA.address.line2}</p>
          <p className={"address"}>{SITE_DATA.address.city}</p>

          <p className={"address"}>{SITE_DATA.support.mail}</p>
          <p className={"address"}>{SITE_DATA.support.phone}</p>
        </address>
        <div className={"column-foot"}>
          <Socials />
        </div>
      </div>
      <div className={"column timings"}>
        <header className={"column-head"}>
          <h3 className={"title"}>{t('footer.workHourTitle')}</h3>
        </header>
        <div className={"column-body"}>
          {SITE_DATA.timings.offline.map(timing => (
            <div className={"timing"}>
              <h3 className={"days"}>
                {timing.day1} {t('footer.dayConnector')} {timing.day2}
              </h3>
              {timing.range.map(timeInfo => (
                <div className={"meals"}>{timeInfo.time} ({timeInfo.type})</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Element name="connect"></Element>
      <div className={"column feedback"}>
        <header className={"column-head"}>
          <h3 className={"title"}>{t('footer.feedbackTitle')}</h3>
        </header>
        <form className={"column-body form-container"}>
          <div className={"form-group"}>
            <Input type="text" placeholder={t('footer.formLabel.name')} />
          </div>
          <div className={"form-group"}>
            <Input type="email" placeholder={t('footer.formLabel.mail')} />
          </div>
          <div className={"form-group"}>
            <Input type="tel" placeholder={t('footer.formLabel.phone')} />
          </div>
          <div className={"form-group"}>
            <Input type="text" placeholder={t('footer.formLabel.message')} />
          </div>
        </form>
        <div className={"column-foot"}>
          <Button type="submit" variant="secondary" size="small">{t('footer.formLabel.submit')}</Button>
        </div>
      </div>
    </footer>
  );
};
