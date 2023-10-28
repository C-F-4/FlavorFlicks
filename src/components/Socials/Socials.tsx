import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Socials.scss';
import { SITE_DATA } from 'src/constants/apps.constants';
import { SvgIcon } from 'src/components/UiComponents/SvgIcon/SvgIcon';
import { ASSETS } from 'src/constants/assets.constants';

export const Socials: FC<{ classlist?: string }> = ({ classlist }) => {
  const { socials } = SITE_DATA;
  const socialIconMap: {[key: string]: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >} = {
    facebook: ASSETS.fbIcon,
    twitter: ASSETS.xIcon,
    instagram: ASSETS.igIcon,
    swiggy: ASSETS.swiggyIcon,
    zomato: ASSETS.zomatoIcon
  };

  return (
    <div className={`icons ${classlist}`}>
      {socials.map(social => (
        <Link to={social.url} key={social.type} className={"icon-link secondary"} target='_blank'>
          <SvgIcon svg={socialIconMap[social.type]} size='2xl' />
        </Link>
      ))}
    </div>
  );
};
