import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Socials.module.scss';
import { SITE_DATA } from 'src/constants/apps.constants';
import { ReactComponent as SvgFacebook} from 'src/assets/images/icons/i-facebook.svg';
import { ReactComponent as SvgTwitter} from 'src/assets/images/icons/i-twitter.svg';
import { ReactComponent as SvgInstagram} from 'src/assets/images/icons/i-instagram.svg';
import { ReactComponent as SvgSwiggy} from 'src/assets/images/icons/i-swiggy.svg';
import { ReactComponent as SvgZomato} from 'src/assets/images/icons/i-zomato.svg';
import { SvgIcon } from 'src/components/UiComponents/SvgIcon/SvgIcon';

export const Socials: FC<{ classlist: string }> = ({ classlist }) => {
  const { socials } = SITE_DATA;
  const socialIconMap: {[key: string]: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >} = {
    facebook: SvgFacebook,
    twitter: SvgTwitter,
    instagram: SvgInstagram,
    swiggy: SvgSwiggy,
    zomato: SvgZomato
  };

  return (
    <div className={`${styles.icons} ${classlist}`}>
      {socials.map(social => (
        <Link to={social.url} key={social.type} className={`${styles.iconLink} ${styles.secondary}`}>
          <SvgIcon svg={socialIconMap[social.type]} size='2XL' />
        </Link>
      ))}
    </div>
  );
};
