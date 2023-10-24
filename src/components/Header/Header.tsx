import { FC } from 'react';
import styles from './Header.module.scss';
import { NavMain } from 'src/components/NavMain/NavMain';
import { Socials } from 'src/components/Socials/Socials';
import { SvgIcon } from 'src/components/UiComponents/SvgIcon/SvgIcon';
import { ReactComponent as ClockIcon } from 'src/assets/images/icons/i-clock.svg';
import { ReactComponent as PhoneIcon } from 'src/assets/images/icons/i-phone.svg';

export const Header: FC<{}> = () => {
  return (
    <div className={styles.siteNavigation}>
      <div className={styles.siteAddress}>
        <div className={styles.siteHours}>
          <SvgIcon svg={ClockIcon} classList={styles.icon} />
        </div>
        <div className={styles.siteContact}>
          <SvgIcon svg={PhoneIcon} classList={styles.icon} />
        </div>
        <Socials classlist={styles.icons} />
      </div>
      <div className={styles.siteNavWrapper}>
        <NavMain />
      </div>
    </div>
  );
};
